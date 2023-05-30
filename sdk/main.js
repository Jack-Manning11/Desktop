window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQAaQaVZJJySMCRPnjWNAq5wznc1lOZ3QPlCqyL3Zw4BMQT0BAPd-ISMOO26k6a_aK0ayZ41Z0LAX3fUfe_ELL9X5wQHnztSpK6kc11pvOlBBfVYWmsUpNwgDj17AiBL5AL2NLQoIOIuPKEmP3VowRDufz83_ft72jmfllya49UzjbhAK0S_Y0jJpY4oyrJ8WeaE9fYaqG4xdvA65eNF0tKbTLjZ';
  const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
  });

  function labelHandling() {
    player.getCurrentState().then(state => {
      if(!state){
        return;
      }
        document.getElementById('album-img').src = state.track_window.current_track.album.images[2].url;
        document.getElementById('song-name').textContent = state.track_window.current_track.name;
        document.getElementById('album-name').textContent = state.track_window.current_track.album.name;
        document.getElementById('artist-name').textContent = state.track_window.current_track.artists[0].name;
        document.getElementById('duration').textContent = state.track_window.current_track.duration_ms;
    });
  }

  // Ready
  player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
  });

  player.addListener('initialization_error', ({ message }) => {
      console.error(message);
  });

  player.addListener('authentication_error', ({ message }) => {
      console.error(message);
  });

  player.addListener('account_error', ({ message }) => {
      console.error(message);
  });  

  document.getElementById('togglePlay').onclick = function() {
    player.togglePlay();
  };

  document.getElementById('prev').onclick = function() {
    player.previousTrack();
    labelHandling();
  };

  document.getElementById('next').onclick = function() {
    player.nextTrack();
    labelHandling();
  };

  document.getElementById('test').onclick = function() {
    player.getCurrentState().then(state => {
      console.log(state);
    })
  }

  player.connect();
}