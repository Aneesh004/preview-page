import React, { useState } from 'react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed w-full bg-white shadow z-10">
      <div className="flex items-center justify-between p-4">
        <div className="text-xl">
          Type<span className="font-normal">sense</span><span className="font-bold text-blue-500"> cloud</span>
        </div>
        <div className="flex space-x-4">
          <button onClick={handleMenu} className="flex items-center space-x-1">
            <span>Typesense</span> <i className="fas fa-chevron-down"></i>
          </button>
          <button>Account</button>
          <button>Admin</button>
          <button>Cluster</button>
          <button>Status</button>
          <button>Docs</button>
          <button>Support</button>
          <button>Guide</button>
          <button>Home</button>
        </div>
      </div>
      {anchorEl && (
        <div className="absolute bg-white shadow p-2 mt-1">
          <button onClick={handleClose}>Search</button>
          <button onClick={handleClose}>Synonyms</button>
          <button onClick={handleClose}>Curation</button>
          <button onClick={handleClose}>Schema</button>
          <button onClick={handleClose}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
