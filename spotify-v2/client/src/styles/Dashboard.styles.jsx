import styled from 'styled-components';
import './font.css';

export const DashBoardContainer = styled.div`
    padding: 2rem;
    min-height: 100vh;
    width: 100%;
`

export const PlayerContainer = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`

export const AlbumContainer = styled.div`
    display: flex;
    padding-top: 4%;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    white-space: nowrap;
    &::-webkit-scrollbar {
        display: none;
    }

    &::-webkit-scrollbar-track {
        display: none;
    }
`


export const Album = styled.div`
    scroll-snap-align: center;
    flex-shrink: 0; /* Prevent images from shrinking when the container is small */
    margin-right: 10px;
    cursor: pointer;
    z-index: 1000;
`

export const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: #EFDFDF;
`

export const SongInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 67%;
    text-align: center;
`

export const SongImage = styled.img`
    max-width: 35%;
`

export const MemoryInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BackButton = styled.button`
    position: absolute;
    left: 25px;
    top: 25px;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #EFDFDF;
    color: #800000;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Buffer = styled.div`
    min-width: 300px;
    min-height: 300px;
    margin-right: 10px;
`

export const TrackName = styled.p`
    font-family: "AvenirBlack";
    font-size: 40px;
    padding: 15px;
`

export const ArtistName = styled.p`
    font-family: "AvenirBold";
    font-size: 24px;
    padding: 15px;
`

export const AlbumName = styled.p`
    font-family: "Avenir";
    font-size: 16px;
    padding: 15px;
`

export const TextContainer = styled.div`
    width: 300px;
    color: #800000;
    background-color: #EFDFDF;
    border-radius: 8px;
    text-align: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 65%;
    margin: auto;
`

export const Track = styled.p`
    font-size: 28px;
    font-family: "AvenirBlack";
    padding: 10px;
`

export const Artist = styled.p`
    font-size: 18px;
    font-family: "AvenirBold";
    padding: 10px;
`

export const SoftBox = styled.div`
    background-color: #EFDFDF;
    position: absolute;
    border-radius: 8px;
    right: 0;
    left: 0;
    top: 0;
    margin: auto;
    width: 340px;
    height: 90%;
`