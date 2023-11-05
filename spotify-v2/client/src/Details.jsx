import React from 'react';
import { 
    DetailsContainer, 
    SongInfoCard, 
    SongImage,
    TrackName,
    ArtistName,
    AlbumName,
} from './styles/Dashboard.styles';
import Memory from './Memory';

const Details = ({ track, id }) => {
    return (
        <DetailsContainer>
            <SongInfoCard>
                <SongImage src={track.track?.album.images[0].url} alt={track.track?.name}/>
                <TrackName className='trackName'>{track.track?.name}</TrackName>
                <ArtistName>{track.track?.artists.map((artist) => artist.name).join(", ")}</ArtistName>
                <AlbumName>{track.track?.album.name}</AlbumName>
            </SongInfoCard>
            <Memory id={id}></Memory>
        </DetailsContainer>
    )
}

export default Details;