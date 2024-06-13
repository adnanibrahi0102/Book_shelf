
import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <h1 className='text-center mt-3 text-lg'>Welcome to Books store! Search for Books</h1>
      <BookSearch addToBookshelf={addToBookshelf} />


    </div>
  );
};

export default SearchPage;
