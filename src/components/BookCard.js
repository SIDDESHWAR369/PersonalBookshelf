import React from 'react';

const BookCard = ({ book, onAdd, onRemove, isInBookshelf }) => {
  const source = `https://covers.openlibrary.org/b/id/${String(book.cover_i)}-L.jpg`;

  return (
    <div className="book-card">
      <img src={source} className='cover' alt="Book cover"/>
      <h3>{book.title}</h3>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      {isInBookshelf ? (
        <button onClick={() => onRemove(book)} className='removeFromBookshelf' style={{background:'red', color:'white'}} onMouseOver={(e)=>e.target.style.background='darkred'} onMouseOut={(e)=>e.target.style.background='red'}>Remove from Bookshelf</button>
      ) : (
        <button onClick={() => onAdd(book)} className='addToBookshelf'>Add to Bookshelf</button>
      )}
    </div>
  );
};

export default BookCard;
