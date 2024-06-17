import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onAdd, onRemove, isInBookshelf }) => (
  <div className="book-list">
    {books.map(book => (
      <BookCard 
        key={book.key} 
        book={book} 
        onAdd={onAdd} 
        onRemove={onRemove} 
        isInBookshelf={isInBookshelf} 
      />
    ))}
  </div>
);

export default BookList;
