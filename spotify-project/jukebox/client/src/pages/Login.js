import React from 'react';
const querystring = require('querystring');

export default function Login() {
    const scope = [
        'user-read-private',
        'user-read-email',
        'user-top-read',
        'streaming',
        'user-read-playback-state',
        'user-modify-playback-state'
    ].join(' ');

    const queryParams = querystring.stringify({
        client_id: 'fd6e3871692a443aad1e62f79254f5d1',
        response_type: 'code',
        redirect_uri: 'http://localhost:3000',
        scope: scope,
    });

    const AUTH_URL = `https://accounts.spotify.com/authorize?${queryParams}`;

    return (
        <div>
            <a href={AUTH_URL}>
                Login With Spotify
            </a>
        </div>
    )
}
