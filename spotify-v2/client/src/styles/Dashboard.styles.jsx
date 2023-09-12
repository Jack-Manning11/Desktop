import styled from 'styled-components';

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
    text-align: left;
    background-color: #6B815F;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
`

export const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`

export const BackButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
`