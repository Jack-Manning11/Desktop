import { StyledGrid } from '../styles';

const ArtistsGrid = ({ artists }) => (
  <>
    {artists && artists.length ? ( //if there is an artists
      <StyledGrid type="artist">
        {artists.map((artist, i) => ( //map them into list items
          <li className="grid__item" key={i}>
            <div className="grid__item__inner">
              {artist.images[0] && ( //display the image
                <div className="grid__item__img">
                  <img src={artist.images[0].url} alt={artist.name} />
                </div>
              )}
              <h3 className="grid__item__name overflow-ellipsis">{artist.name}</h3> 
              <p className="grid__item__label">Artist</p>
            </div> 
          </li>
        ))}
      </StyledGrid>
    ) : (
      <p className="empty-notice">No artists available</p>
    )}
  </>
);
//lines 15&16 can be cut and code should be possible to be refactored into the jukebox page

export default ArtistsGrid;