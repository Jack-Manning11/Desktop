import React from 'react';
import Player from './Player';
import { useState, useEffect } from 'react';

export default function Song() {
    const [song, setSong] = useState(null);

    useEffect(() => {
        const storedSong = localStorage.getItem('currentSong');
        if (storedSong) {
            setSong(JSON.parse(storedSong));
        }
      }, []);

      const handleBack = () => {
        localStorage.removeItem('currentSong'); // Clear the stored item
        window.location.href = '/'; // Redirect to the root URL (item list)
      };

    return (
        <div>
            <p>Song</p>
            {song && (
                <div>
                    <button onClick={handleBack}>Back</button>
                    <img src={song.track.album.images[0].url} alt='Cover' style={{ width: '200px', height: '200px' }}></img>
                    <p>{song.track.name}</p>
                </div>
            )}
        </div>
    )
}
