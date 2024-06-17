import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBooks);
  }, []);

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <br/>
      <a href="/" className='svg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-left">
          <circle cx="12" cy="12" r="10"/>
          <path d="m14 16-4-4 4-4"/>
        </svg>
      </a>
      <h1>My Bookshelf</h1>
      <BookList 
        books={bookshelf} 
        onAdd={() => {}} 
        onRemove={removeFromBookshelf} 
        isInBookshelf={true} 
      />
    </div>
  );
};

export default Bookshelf;
