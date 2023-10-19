import React, { useState, useEffect } from 'react';
import SpotifyPlayer from "react-spotify-web-playback";

const Player = ({ accessToken, trackList }) => {
    const [play, setPlay] = useState(false);

    useEffect(() => {
        setPlay(true);
    }, [trackList]);

    if(!accessToken) return null;

    const handleStateChange = (state) => {
        !state.isPlaying && setPlay(false);

        if(state && state.position === 0) {
            console.log('User skipped to the next track');
        }
        console.log(trackList);
    }

    return (
        <SpotifyPlayer 
            token={accessToken}
            callback={handleStateChange}
            play={play}
            hideAttribution={true}
            name='Breakup Stereo'
            uris={trackList}
            styles={{
                activeColor: "#EFDFDF",
                bgColor: "#191414",
                color: "#EFDFDF",
                loaderColor: "#EFDFDF",
                sliderColor: "#800000",
                trackArtistColor: "#EFDFDF",
                trackNameColor: "#EFDFDF",
                height: "80px",
            }}
        />
    );
};

export default Player;