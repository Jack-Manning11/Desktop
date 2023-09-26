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
`

export const TextContainer = styled.div`
    width: 300px;
    text-align: center;
    background-color: #EFDFDF;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    transform: translate(0, 5vh);
    border-radius: 8px;
    font-family: "GothamMedium";
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
`

export const SongImage = styled.img`
    max-width: 45%;
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
    line-height: 5px;
    border-radius: 8px;
`

export const Buffer = styled.div`
    min-width: 300px;
    min-height: 300px;
    margin-right: 10px;
`
export const ArtistInfo = styled.p`
    color: #800000;
    font-family: "GothamLight";
`

export const TrackInfo = styled.p`
    color: #800000;
    font-family: "GothamMedium";
    padding-top: 10px;
`