import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Bookshelf from './pages/Bookshelf';
import './App.css'

const App = () => {
  const addToBookshelf = (book) => {
    const currentBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    if (!currentBookshelf.some(b => b.key === book.key)) {
      const updatedBookshelf = [...currentBookshelf, book];
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search onAdd={addToBookshelf} />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </Router>
  );
};

export default App;
