import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Details, Favorites, Home } from './pages';

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/recipe-item/:id' element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
