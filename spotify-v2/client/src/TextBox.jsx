import { useEffect, useRef, useState } from 'react';
import { TextContainer } from './styles/Dashboard.styles';

const TextBox = ({ songs }) => {
    const containerRef = useRef(null);
    const [currentSong, setCurrentSong] = useState(songs[0]); // Initialize with the first song
  
    useEffect(() => {
      const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;
  
        const scrollPosition = container.scrollLeft / container.scrollWidth;
        const songIndex = Math.floor(scrollPosition * songs.length);
        const song = songs[songIndex];
  
        setCurrentSong(song);
      };
  
      const container = containerRef.current;
      if (container) {
        container.addEventListener('scroll', handleScroll);
      }
  
      return () => {
        if (container) {
          container.removeEventListener('scroll', handleScroll);
        }
      };
    }, [songs]);
  
    return (
      <div ref={containerRef}>
        <p>{currentSong}</p>
      </div>
    );
  };

export default TextBox;