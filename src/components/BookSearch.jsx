
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import useDebounce from "../hooks/useDebounce";

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 1000);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      if (debouncedQuery) {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://openlibrary.org/search.json?q=${debouncedQuery}&limit=10`
          );
          setResults(response.data.docs);
        } catch (error) {
          console.log("Error occurred while getting data", error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    };
    fetchBooks();
  }, [debouncedQuery]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 ">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books.."
          className="w-80 px-2 py-3 outline-none border border-orange-600 rounded-xl"
        />
        {loading && <div className="mt-4 text-orange-600">Searching...</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((book) => (
            <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSearch;
