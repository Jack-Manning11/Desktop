import React from 'react';
import { DetailsContainer } from './styles/Dashboard.styles';

const Details = ({ track }) => {
    console.log(track);
    return (
        <DetailsContainer>
            <img src={track.track?.album.images[1].url} alt={track.track?.name}/>
            <p>Song: {track.track?.name}</p>
            <p>Album: {track.track?.album.name}</p>
            <p>Artists: {track.track?.artists.map((artist) => artist.name).join(", ")}</p>
        </DetailsContainer>
    )
}

export default Details;