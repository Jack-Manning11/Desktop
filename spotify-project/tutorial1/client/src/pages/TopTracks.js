import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import { getTopTracks } from '../spotify';
import { SectionWrapper, TrackList, TimeRangeButtons } from '../components';

const TopTracks = () => {
    const [activeRange, setActiveRange] = useState('short');
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const userTopTracks = await getTopTracks(`${activeRange}_term`);
          setTopTracks(userTopTracks.data);
        };
    
        catchErrors(fetchData());
    }, [activeRange]);

    return (
        <main>
            {topTracks && (
                <SectionWrapper title="Top tracks" breadcrumb="true">
                    <TimeRangeButtons activeRange={activeRange} setActiveRange={setActiveRange} />
                    <TrackList tracks={topTracks.items} />
                </SectionWrapper>
            )}
        </main>
    );
}
export default TopTracks;