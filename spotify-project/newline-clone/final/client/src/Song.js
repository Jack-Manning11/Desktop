import React from 'react';
import Player from './Player';
import SongCard from './SongCard';

export default function Song({ accessToken, trackUri }) {
    return (
        <>
            <SongCard />
            <Player accessToken={accessToken} trackUri={trackUri}/>
        </>
    )
}
