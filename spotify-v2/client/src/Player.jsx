import React, { useState, useEffect } from 'react';
import SpotifyPlayer from "react-spotify-web-playback";

const Player = ({ accessToken, trackUri }) => {
    const [play, setPlay] = useState(false);

    useEffect(() => {
        setPlay(true);
    }, [trackUri]);

    if(!accessToken) return null;

    return (
        <SpotifyPlayer 
            token={accessToken}
            callback={state => !state.isPlaying && setPlay(false)}
            play={play}
            hideAttribution={true}
            uris={trackUri ? trackUri : []}
            styles={{
                activeColor: "#fff",
                bgColor: "#333",
                color: "#fff",
                loaderColor: "#fff",
                sliderColor: "#1cb954",
                trackArtistColor: "#fff",
                trackNameColor: "#fff",
                height: "55px",
            }}
        />
    );
};

export default Player;