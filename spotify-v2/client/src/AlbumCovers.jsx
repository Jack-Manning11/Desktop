import React from 'react';
import { AlbumContainer, Album } from './styles/Dashboard.styles';

const AlbumCovers = ({ songs }) => {
  return (
    <AlbumContainer>
      {songs.map((song, index) => (
        <Album key={index}>
          <img src={song.track?.album?.images[1].url} alt={song.track?.album?.name} />
        </Album>
      ))}
    </AlbumContainer>
  )
}

export default AlbumCovers;