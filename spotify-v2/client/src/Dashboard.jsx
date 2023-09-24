import React, { useState, useEffect, useRef } from 'react';
import useAuth from './hooks/useAuth';
import Player from './Player';
import Details from './Details';
import SpotifyWebApi from 'spotify-web-api-node';
import {
    DashBoardContainer,
    PlayerContainer,
    BackButton,
    AlbumContainer, 
    Album, 
    TextContainer,
    Buffer,
    Info,
} from './styles/Dashboard.styles';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
});

const Dashboard = ({ code }) => {
    const accessToken = useAuth(code);
    const [playingTrack, setPlayingTrack] = useState();
    const [trackList, setTrackList] = useState([]);
    const [songs, setSongs] = useState([]);
    const [centeredIndex, setCenteredIndex] = useState(0); // Track the centered image index
    const albumContainerRef = useRef(null);
    const [show, setShow] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    const playlistId = "5zTUX59PIGj24TuLWBxnQC";  

    function chooseTrack(e) {
        let idNum = parseInt(e.target.id);
        //add handling for grabbing songs at the end of the array        
        setPlayingTrack(songs[e.target.id]);
        setTrackList([songs[idNum]?.track?.uri, songs[idNum+1]?.track?.uri, songs[idNum+2]?.track?.uri, songs[idNum+3]?.track?.uri, songs[idNum+4]?.track?.uri]);
        let fixedPos = idNum + 2;
        setScrollPos(fixedPos);
        setShow(true);
    }

    const onBackButtonClick = () => {
        setShow(false);
        setTimeout(() => {
            const element = document.getElementById(scrollPos);
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 250);
    };

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
                    setSongs(allTracks);
                }
            } catch (err) {
                console.log("Error fetching tracks: ", err);
            }
        };

        fetchPlaylistTracks();
        return () => (cancel = true);
    }, [playlistId, accessToken]);

    useEffect(() => {
        // Add a scroll event listener to track the centered image index
        const handleScroll = () => {
          if (!albumContainerRef.current) return;
          const container = albumContainerRef.current;
          const containerWidth = container.clientWidth;
          const scrollLeft = container.scrollLeft;
          const albumWidth = 310;
    
          // Calculate the centered index based on the scroll position
          const index = Math.floor((scrollLeft-620+(containerWidth/2))/albumWidth); //-620 is here for the left buffer (Album Width + Margin) * 2
          setCenteredIndex(index);
        };
    
        const container = albumContainerRef.current;
        if (container) {
          container.addEventListener("scroll", handleScroll);
        }
    
        return () => {
          if (container) {
            container.removeEventListener("scroll", handleScroll);
          }
        };
      }, [songs, show]);


    return (
        <DashBoardContainer>
            {show ? (
                <>
                    <BackButton onClick={onBackButtonClick}>
                        <p>&#8592;</p>
                    </BackButton>
                    <Details track={playingTrack} />
                </>
            ) : (
                <>
                    <AlbumContainer ref={albumContainerRef}>
                        <Buffer></Buffer>
                        <Buffer></Buffer>
                        {songs.map((song, index) => (
                            <Album key={index} onClick={chooseTrack}>
                                <img src={song.track?.album?.images[1].url} alt={song.track?.album?.name} id={index}/>
                            </Album>
                        ))}
                        <Buffer></Buffer>
                        <Buffer></Buffer>
                    </AlbumContainer>
                    <TextContainer>
                    {songs[centeredIndex] && (
                        <>
                            <Info>{songs[centeredIndex].track?.name}</Info>
                            <Info>{songs[centeredIndex].track?.artists.map((artist) => artist.name).join(", ")}</Info>
                        </>
                    )}
                    </TextContainer>
                </>
            )}
            <PlayerContainer>
                <Player accessToken={accessToken} trackList={trackList}/>
            </PlayerContainer>
        </DashBoardContainer>
    );
};

export default Dashboard;