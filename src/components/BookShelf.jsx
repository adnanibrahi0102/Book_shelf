import React from 'react';

const Bookshelf = ({ bookshelf }) => {
  return (
    <div className="bookshelf bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Bookshelf</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          bookshelf.length === 0 && (
            <div className="text-orange-600">No books in your shelf</div>
          )
        }
        {bookshelf.map((book, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className="w-full h-auto mb-2 rounded"
              />
            )}
            <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-600">{book.author_name?.join(', ')}</p>
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
 