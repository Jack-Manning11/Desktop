import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import SpotifyWebApi from "spotify-web-api-node";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3001;

app.post("/login", async (req, res) => {
    const { code } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId: "fd6e3871692a443aad1e62f79254f5d1",
        clientSecret: "0c29a0fd03264b4ea1eec051776e49da",
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
        redirectUri: "http://localhost:3000",
        clientId: "fd6e3871692a443aad1e62f79254f5d1",
        clientSecret: "0c29a0fd03264b4ea1eec051776e49da",
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

app.listen(PORT, err => {
    if(err) {
        console.log(err);
    }
    console.log("Listening on port: ", PORT);
})