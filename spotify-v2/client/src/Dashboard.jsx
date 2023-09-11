import React, { useState, useEffect } from 'react';
import useAuth from './hooks/useAuth';
import Player from './Player';
import AlbumCovers from './AlbumCovers';
import SpotifyWebApi from 'spotify-web-api-node';
import {
    DashBoardContainer,
    PlayerContainer,
} from './styles/Dashboard.styles';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
});

const Dashboard = ({ code }) => {
    const accessToken = useAuth(code);
    const [playingTrack, setPlayingTrack] = useState();
    const [songs, setSongs] = useState([]);

    const playlistId = "5zTUX59PIGj24TuLWBxnQC";

    function chooseTrack(track) {
        setPlayingTrack(track);
    }

    useEffect(() => {
        if(!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if(!accessToken) return;

        let cancel = false;
        let offset = 0;
        const allTracks = [];

        const fetchPlaylistTracks = async () => {
            try {
                const { body } = await spotifyApi.getPlaylistTracks(playlistId, { offset: offset });
                if (cancel) return;

                allTracks.push(...body.items);

                if(allTracks.length < body.total){
                    offset += 100;
                    await fetchPlaylistTracks();
                } else {
                    console.log(allTracks);
                    setSongs(allTracks);
                }
            } catch (err) {
                console.log("Error fetching tracks: ", err);
            }
        };

        fetchPlaylistTracks();

        return () => (cancel = true);
    }, [playlistId, accessToken]);


    return (
        <DashBoardContainer>
            <AlbumCovers songs={songs}/>
            <PlayerContainer>
                <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
            </PlayerContainer>
        </DashBoardContainer>
    );
};

export default Dashboard;