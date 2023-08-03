import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import { getCurrentUserProfile, getTopArtists, getTopTracks, getCurrentUserPlaylists } from '../spotify';
import { StyledHeader } from '../styles';
import { SectionWrapper, ArtistsGrid, TrackList, PlaylistsGrid, Loader, Player } from '../components';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [playlists, setTopPlaylists] = useState(null);
  const accessToken = localStorage.spotify_access_token;
  const testTrack = topTracks?.items[0]?.uri;

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userTopArtists = await getTopArtists();
      setTopArtists(userTopArtists.data);

      const userTopTracks = await getTopTracks();
      setTopTracks(userTopTracks.data);

      const userTopPlaylists = await getCurrentUserPlaylists();
      setTopPlaylists(userTopPlaylists.data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <>
      {profile && (
        <>
          <StyledHeader type="user">
            <div className="header__inner">
              {profile.images.length && profile.images[1].url && (
                <img className="header__img" src={profile.images[1].url} alt="Avatar"/>
              )}
              <div>
                <div className="header__overline">Profile</div>
                <h1 className="header__name">{profile.display_name}</h1>
                <p className="header__meta">
                  <span>
                    {profile.followers.total} Follower{profile.followers.total !== 1 ? 's' : ''}
                  </span>
                </p>
              </div>
            </div>
          </StyledHeader>
        </>
      )}
      {topArtists && topTracks && playlists ? (
        <main>
          <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
            <ArtistsGrid artists={topArtists.items.slice(0, 10)} />
          </SectionWrapper>

          <SectionWrapper title="Top tracks this month" seeAllLink="/top-tracks">
            <TrackList tracks={topTracks.items.slice(0, 10)} />
          </SectionWrapper>

          <SectionWrapper title="Playlists" seeAllLink="/playlists">
            <PlaylistsGrid playlists={playlists.items.slice(0, 10)} />
          </SectionWrapper>

          <Player accessToken={accessToken} trackUri={testTrack}/>
        </main>
      ) : (
        <Loader />
      )}
    </>
  )
};

export default Profile;