
import React from 'react';

const BookCard = ({ book, addToBookshelf }) => {
  const handleAddToShelf = () => {
    addToBookshelf(book);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      {book.cover_i && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          className="w-24 h-36 object-cover rounded"
        />
      )}
      <div className="flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center'>
          <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
          <p className="text-gray-600"><strong>Author:</strong> {book.author_name?.join(', ')}</p>
          <p className="text-gray-600"><strong>First Published:</strong> {book.first_publish_year}</p>
          <button onClick={handleAddToShelf} className='px-2 py-1 bg-black text-orange-500 text-sm font-bold rounded-lg mt-2'>Add To Shelf</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
