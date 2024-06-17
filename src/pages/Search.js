import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';

const Search = ({ onAdd }) => {
  const [query, setQuery] = useState('harry');
  const [books, setBooks] = useState([]);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (query.length > 2) {
      const fetchBooks = async () => {
        try {
          const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
          setBooks(response.data.docs);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      };

      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      setQuery(value);
    }, 1000); // 1 second delay
  };

  return (
    <div>
      <nav style={{border:'1px solid black', backgroundColor:'RGB(31, 41, 55)'}}>
        <div className='title'>
          <h1>PERSONAL BOOKSHELF</h1>
          <a href="/bookshelf" className='icon' title='Bookshelf'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-library-big">
              <rect width="8" height="18" x="3" y="3" rx="1"/>
              <path d="M7 3v18"/>
              <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/>
            </svg>
          </a>
        </div>
      </nav>
      <input 
        type="text" 
        defaultValue={query} 
        onChange={handleInputChange} 
        placeholder="Search for a book..." 
      />
      <BookList 
        books={books} 
        onAdd={onAdd} 
        onRemove={() => {}} 
        isInBookshelf={false} 
      />
    </div>
  );
};

export default Search;
