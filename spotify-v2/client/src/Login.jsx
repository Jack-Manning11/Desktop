import React from "react";

import { LoginButton, LoginLink } from "./styles/Login.styles";

const Login = () => {
    const scopes = [
        'streaming',
        'user-read-email',
        'user-read-private',
        'user-library-read',
        'user-library-modify',
        'user-read-playback-state',
        'user-modify-playback-state'
    ];
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${scopes.join(" ")}`;
    
    return (
        <LoginButton>
            <LoginLink href={AUTH_URL}>Login with Spotify</LoginLink>
        </LoginButton>
    );
};

export default Login;