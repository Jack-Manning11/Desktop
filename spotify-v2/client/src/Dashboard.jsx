import React, { useState, useEffect } from 'react';
import useAuth from './hooks/useAuth';
import Player from './Player';
import TextBox from './TextBox';
import { AlbumContainer, Album, TextContainer } from './styles/Dashboard.styles';
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

    function chooseTrack(e) {
        console.log(songs[e.target.id]);
        setPlayingTrack(songs[e.target.id].track);
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
            {songs && (
                <>
                    <AlbumContainer>
                    {songs.map((song, index) => (
                        <Album key={index} onClick={chooseTrack}>
                            <img src={song.track?.album?.images[1].url} alt={song.track?.album?.name} id={index}/>
                        </Album>
                    ))}
                    </AlbumContainer>
                    <TextContainer>
                        
                    </TextContainer>
                </>
            )}
            <PlayerContainer>
                <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
            </PlayerContainer>
        </DashBoardContainer>
    );
};

export default Dashboard;