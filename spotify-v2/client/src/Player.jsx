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
                activeColor: "#EFDFDF",
                bgColor: "#333",
                color: "#EFDFDF",
                loaderColor: "#EFDFDF",
                sliderColor: "#800000",
                trackArtistColor: "#EFDFDF",
                trackNameColor: "#EFDFDF",
                height: "55px",
            }}
        />
    );
};

export default Player;