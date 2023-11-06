import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import SpotifyWebApi from "spotify-web-api-node";
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Now you can use __dirname as before

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

//heroku app error prevention
const PORT = process.env.PORT || 3001;

app.post("/login", async (req, res) => {
    const { code } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })

    try {
        const {
            body: { access_token, refresh_token, expires_in },
        } = await spotifyApi.authorizationCodeGrant(code);

        res.json({ access_token, refresh_token, expires_in });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

app.post("/refresh", async (req, res) => {
    const { refreshToken } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken,
    })

    try {
        const {
            body : { access_token, expires_in },
        } = await spotifyApi.refreshAccessToken();
        res.json({ access_token, expires_in });
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, err => {
    if(err) {
        console.log(err);
    }
    console.log("Listening on port: ", PORT);
})