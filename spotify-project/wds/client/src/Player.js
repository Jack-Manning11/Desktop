import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useEffect, useState } from 'react';

export default function Player({ accessToken, trackUri }) {

    const [play, setPlay] = useState(false);

    useEffect(() => setPlay(true), [trackUri])

    if(!accessToken) return null
    return (
        <SpotifyPlayer 
            token={accessToken}
            showSaveIcon
            callback={state => {
                if(!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris = {trackUri ? [trackUri] : []}
        />
    )
}
//showSaveIcon allows you to save songs to Spotify liked (not needed)
//uris always expects an array, so if we have a uri pass it that, if not pass an empty array
//less important for the jukebox as this is for error handling in search but still good to know