import React, { useState } from 'react';

const Sidebar = () => {
  const [activeRow, setActiveRow] = useState(null);

  const toggleDropdown = (index) => {
    setActiveRow(activeRow === index ? null : index);
  };

  const rows = [
    { title: 'Clusters', links: [{ href: '#clusters', text: '32 Million Songs' }] },
    { title: 'Cluster Configuration', links: [{ href: '#config', text: 'Configuration' }] },
    // ... add other rows similarly
  ];

  return (
    <div className="w-1/5 p-4 bg-gray-100 border-r border-gray-200">
      {rows.map((row, index) => (
        <div key={index}>
          <div className="flex items-center justify-between p-2 cursor-pointer" onClick={() => toggleDropdown(index)}>
            <span>{row.title}</span>
            <i className={`fas fa-chevron-${activeRow === index ? 'up' : 'down'}`}></i>
          </div>
          {activeRow === index && (
            <div className="pl-4">
              {row.links.map((link, subIndex) => (
                <a key={subIndex} href={link.href} className="block p-2">
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
