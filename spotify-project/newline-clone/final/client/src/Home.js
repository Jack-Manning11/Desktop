import React, { useState, useEffect } from 'react';
import { catchErrors } from './utils';
import { getPlaylistById } from './spotify';
import HorizontalScroll from './HorizontalScroll';
import axios from 'axios';

export default function Home() {
  //use state to grab the tracks info, stored in 2 variables to handle offset calls
  const [tracksData, setTracksData] = useState(null);
  const [tracks, setTracks] = useState(null);
  //id of playlist in case that ever gets changed
  const id = '5zTUX59PIGj24TuLWBxnQC';

  //simple useEffect hook to grab the playlist data
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylistById(id);
      setTracksData(data);
    }
    catchErrors(fetchData());
  },[id])

  //This hook handles adding all of the tracks into one array from multiple calls using Spotify APIs included "next" url
  useEffect(() => {
    if(!tracksData){
      return;
    }

    const fetchMoreData = async () => {
      if(tracksData.next) {
        const { data } = await axios.get(tracksData.next);
        setTracksData(data);
      }
    };

    setTracks(tracks => ([
      ...tracks ? tracks : [],
      ...tracksData.items
    ]));

    catchErrors(fetchMoreData());
  },[tracksData])

  return (
    <>
      {tracks && (
        <>
          <p>Tracks</p>
          <div>
            <HorizontalScroll tracks={tracks}/>
          </div>
          </>
      )}
    </>
  )
}
