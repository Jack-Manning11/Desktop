import React from 'react';

export default function HorizontalScroll({ tracks }) {
  return (
    <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
      {tracks.map((song, index) => (
        <div key={index} style={{ display: 'inline-block', margin: '0 10px' }}>
          <img src={song.track?.album?.images[0].url} alt={`Item ${index}`} style={{ width: '400px', height: '400px' }} />
          <p>{song.track.name}</p>
        </div>
      ))}
    </div>
  );
};
