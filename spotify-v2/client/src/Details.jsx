import React from 'react';
import { DetailsContainer, SongInfoCard, SongImage } from './styles/Dashboard.styles';
import Memory from './Memory';

const Details = ({ track }) => {
    //Change album image picker to largest code for potential error handling
    return (
        <DetailsContainer>
            <SongInfoCard>
                <SongImage src={track.track?.album.images[0].url} alt={track.track?.name}/>
                <p>Song: {track.track?.name}</p>
                <p>Album: {track.track?.album.name}</p>
                <p>Artists: {track.track?.artists.map((artist) => artist.name).join(", ")}</p>
            </SongInfoCard>
            <Memory></Memory>
        </DetailsContainer>
    )
}

export default Details;