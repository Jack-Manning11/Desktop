import styled from 'styled-components';
import './font.css';

export const DashBoardContainer = styled.div`
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
    padding-top: 7%;
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
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: #EFDFDF;
    padding: 10px;
    justify-content: space-between;
`

export const SongInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: calc(100vh - 90px);
    border-radius: 8px;
    text-align: center;
    background-color: #282A2A;
    padding: 10px;
`

export const SongImage = styled.img`
    max-width: 75%;
`

export const MemoryInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #282A2A;
    width: 64%;
    height: calc(100vh - 90px);
    border-radius: 8px;
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
    padding: 10px;
    padding-top: 15px;
`

export const ArtistName = styled.p`
    font-family: "AvenirBold";
    font-size: 24px;
    padding: 12px;
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
    top: 68.5%;
    margin: auto;
`

export const Track = styled.p`
    font-size: 28px;
    font-family: "AvenirBlack";
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* This limits the paragraph to one line */
    -webkit-box-orient: vertical;
    padding-top: 30px;
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
    width: 320px;
    height: calc(100vh - 90px);
`

export const Shuffle = styled.div`
    position: absolute;
    right: 44vw;
    bottom: 5.4vh;
    color: #efdfdf;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background-color: #282a2a;
    cursor: pointer;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`

export const Info = styled.div`
    position: absolute;
    right: 25px;
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
    z-index: 5000;
`

export const DetailsBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 90px);
    background-color: #191414;
    z-index: 1000;
`

export const MemoryText = styled.p`
    font-family: "AvenirBold";
    font-size: 24px;
    padding: 15px;
`