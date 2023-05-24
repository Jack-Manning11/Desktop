const clientId = 'YOUR_CLIENT_ID';
const redirectUri = 'YOUR_REDIRECT_URI';
const scopes = ['user-read-private', 'user-read-email']; // Add additional scopes as needed

// Function to handle the login process
function login() {
  window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token`;
}

// Function to extract the access token from the URL hash
function getAccessTokenFromUrl() {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  return params.get('access_token');
}

// Call the getAccessTokenFromUrl() function when the page loads
window.onload = function() {
  const accessToken = getAccessTokenFromUrl();
  if (accessToken) {
    // Access token is available, you can use it for API calls
    console.log('Access token:', accessToken);
  } else {
    // Access token is not available, initiate the login process
    login();
  }
};
