import React from 'react';

export default function HorizontalScroll({ tracks }) {

  const handleClick = (song) => {
    localStorage.setItem('currentSong', JSON.stringify(song));
    window.location.href = '/song';
  }

  return (
    <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
      {tracks.map((song, index) => (
        <div key={index} style={{ display: 'inline-block', margin: '0 10px' }} seeAllLink="/song" onClick={() => handleClick(song)}>
          <img src={song.track?.album?.images[0].url} alt={`Item ${index}`} style={{ width: '400px', height: '400px', cursor:'pointer' }} />
          <p>{song.track.name}</p>
        </div>
      ))}
    </div>
  );
};
