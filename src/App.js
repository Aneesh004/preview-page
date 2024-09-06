import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex flex-grow mt-16">
        <Sidebar />
        <div className="flex-grow p-4">
          <input
            type="text"
            placeholder="Search your songs here..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full mb-4 p-2 border border-pink-400 rounded hover:border-pink-500"
          />
         <MainContent searchQuery={searchQuery} /> 
        </div>
      </div>
    </div>
  );
};

export default App;
