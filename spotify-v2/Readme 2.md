# Spotify Jukebox

## Description
This project allows you to take a playlist from spotify and create a functional, horizontally scrolling jukebox interface for it. Using React and Node to handle the web application with some extra modules to aid in the spotify authorization and api calling. This allows you to listen to and interact with your spotify songs in a way I haven't seen done before and hopefully you get some use out of it!

## Details
This project is built in React Native for the client side and a Node server running the backend. The Node server utilizes axios for ease of use and the both sides of the application use two separate spotify modules to simplify the authorization workflow as well as api calling to grab track data and manipulate the player. These are react-spotify-web-playback for easily creating a player instance and spotify-web-api-node to make simple api calls using their built in functions. This app also is run completely on one web page to cut down on slow rendering and make an incredibly responsive application

## Setup
Following the file structure on this github would be the simplest. Create a new root folder for your project and run "npx create-react-app client" to get started. Then create a new folder in your root folder called "server" to make sure the frontend and backend are kept organized. 

### Server
Run "npm init --y" to initialize the express server and install the necessary libraries with "npm i express cors dotenv spotify-web-api-node". Cors is simply 
