import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: '2af3bf6f27c24ae0ab04aa65afe9958b',
})

export default function Dashboard({ code }) {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if(!search) return setSearchResults([])
        if(!accessToken) return

        spotifyApi.searchTracks(search).then(res => {
            console.log(res.body.tracks.items);
        })
    }, [search, accessToken]);

    return (
        <Container className='d-flex flex-column py-2' style={{height:'100vh'}}>
            <Form.Control type='search' placeholder='Search Songs/Artists' value={search} onChange={e => setSearch(e.target.value)} />
            <div className='flex-grow-1 my-2' style={{ overflowY: 'auto' }}></div>
        </Container>
    )
}
