const clientId = "2af3bf6f27c24ae0ab04aa65afe9958b"; // Replace with your client ID
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
let cards = document.querySelector('.albumCards');
let audioTest;

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const playlists = await fetchPlaylists(accessToken);
    const playerInfo = await fetchPlayer(accessToken);
    buildCards(playlists);
    //audioTest = new Audio(playlists.tracks.items[0].track.preview_url);

    //console.log(playlists.tracks.items[0].track.preview_url);
    //console.log(playlists);
}

function switchScreens() {
    
}

function buildCards(playlist){
    console.log(playlist);
    //playlists.tracks.items[i].track.preview_url
    //playlists.tracks.items[i].track.album.images[0].url
    //playlists.tracks.items[i].track.album.artists[i].name
    //playlists.tracks.items[i].track.name
    for(let i = 0; i < playlist.tracks.items.length; i++) {
        let div = document.createElement("div");
        div.classList.add('card');
        div.addEventListener("click", (e) => {
            console.log(e.target);
        });
        let textDiv = document.createElement("div");
        textDiv.classList.add('albumInfo');
        let s = playlist.tracks.items[i].track.name + ' by ' + playlist.tracks.items[i].track.album.artists[0].name;
        let txt = document.createTextNode(s);
        textDiv.appendChild(txt);
        let img = document.createElement("img");
        img.src = playlist.tracks.items[i].track.album.images[1].url
        div.appendChild(img);
        div.appendChild(textDiv);
        cards.appendChild(div);
    }
}

document.getElementById('play').addEventListener('click', () => {
    audioTest.play();
});

document.getElementById('pause').addEventListener('click', () => {
    audioTest.pause();
});
  


export async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("scope", "user-read-private user-read-email, user-read-playback-state, user-modify-playback-state, playlist-read-private, playlist-read-collaborative, playlist-modify-public, playlist-modify-private");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}


export async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}

async function fetchPlaylists(token) {
    const result = await fetch('https://api.spotify.com/v1/playlists/5zTUX59PIGj24TuLWBxnQC', {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    return await result.json();
}

async function fetchPlayer(token) {
    const result = await fetch('https://api.spotify.com/v1/me/player', {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    return await result;
}