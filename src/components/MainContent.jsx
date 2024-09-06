import React from 'react';

const MainContent = ({ searchQuery }) => {
  const data = {
    title: 'Leaving On a Jet Plane',
    track_id: '6f39faa5-b000-46fe-955c-438d04600e7f',
    album_name: 'Gold',
    primary_artist_name: 'John Denver',
    genres: ['Country rock', 'Folk rock', 'Psychedelic', 'Rock', 'Soft rock'],
    country: 'GB',
    release_date: 1579824000,
    release_decade: '2020s',
    release_group_types: ['Album', 'Compilation'],
    text_match_info: {
      best_field_score: 5523317457152,
      best_field_weight: 15,
      fields_matched: 1,
      score: 2893615515669364857,
      tokens_matched: 5,
    },
    id: 30924709,
  };

  const filteredData = Object.keys(data).reduce((acc, key) => {
    if (typeof data[key] === 'string' && data[key].toLowerCase().includes(searchQuery.toLowerCase())) {
      acc[key] = data[key];
    } else if (Array.isArray(data[key]) && data[key].some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))) {
      acc[key] = data[key];
    }
    return acc;
  }, {});

  const renderData = (data) => {
    return Object.keys(data).map(key => (
      <div key={key} className="flex mb-2">
        <span className="font-bold w-40">{key}:</span>
        <div>{Array.isArray(data[key]) ? `[${data[key].join(', ')}]` : JSON.stringify(data[key])}</div>
      </div>
    ));
  };

  const genres = [
    'Rock', 'Pop', 'Jazz', 'Classical', 'Hip Hop', 'Electronic', 'Blues', 'Country',
  ];

  const primaryArtists = [
    'The Beatles', 'Elton John', 'Bob Dylan', 'Queen', 'David Bowie', 'Prince', 'The Rolling Stones'
  ];

  const releaseDecades = [
    '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'
  ];

  return (
    <div className="flex">
      <div className="w-1/5 p-4 bg-gray-50 border-r border-gray-200 flex flex-col gap-2">
        <div className="mb-4">
          <h6 className="font-bold">Genre</h6>
          {genres.map((genre, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="checkbox" />
              {genre}
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h6 className="font-bold">Primary Artist</h6>
          {primaryArtists.map((artist, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="checkbox" />
              {artist}
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h6 className="font-bold">Release Decade</h6>
          {releaseDecades.map((decade, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="checkbox" />
              {decade}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow p-4 relative">
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
            <i className="fas fa-edit"></i>
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
            <i className="fas fa-share-alt"></i>
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100" onClick={() => alert('JSON Prettified!')}>
            <i className="fas fa-code"></i>
          </button>
        </div>
        {renderData(filteredData)}
      </div>
    </div>
  );
};

export default MainContent;
