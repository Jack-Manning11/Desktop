import React from "react";

import { 
    LoginButton, 
    LoginLink, 
    LoginContainer, 
    LoginInfo,
    Title,
    Description 
} from "./styles/Login.styles";

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
        <LoginContainer>
            <LoginInfo>
                <Title>Breakup Stereo</Title>
                <Description>This musical interface was made as an installation looking at the idea of breakup music. A seamless jukebox that allows users to interact with and listen to what others have determined are breakup songs to them. Logging in will authorize this application to create a player instance connected to your spotify and play songs from our curated playlist. Login below to get started. Created by Jack Manning and Anthony Pinter</Description>
            </LoginInfo>
            <LoginButton>
                <LoginLink href={AUTH_URL}>Login with Spotify</LoginLink>
            </LoginButton>
        </LoginContainer>
    );
};

export default Login;