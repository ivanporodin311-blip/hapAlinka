import React from 'react';
import { useAudio } from '../context/AudioContext';

const MusicPage = () => {
  const { tracks, currentTrack, isPlaying, playTrack, stopTrack } = useAudio();

  const handlePlayPause = (track) => {
    playTrack(track);
  };

  return (
    <div style={{ 
      
      maxWidth: '500px',
      margin: '0 auto ',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: '25px', color: '#ffffff', textAlign: 'center' }}>Плеер</h1>

      {/* Список треков */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(15px) saturate(180%)',
        borderRadius: '50px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '15px',
        marginBottom: '20px'
      }}>
        {tracks.map(track => (
          <div
            key={track.id}
            style={{
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: currentTrack?.id === track.id ? 'white' : '#d6d6d6',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(15px) saturate(180%)',
              borderRadius: '50px',
            }}
          >
            <div>
              <strong>{track.title}</strong>
              <div style={{ fontSize: '14px', color: '#666' }}>{track.artist}</div>
            </div>
            
            <button
              onClick={() => handlePlayPause(track)}
              style={{
                padding: '8px 16px',
                backgroundColor: currentTrack?.id === track.id && isPlaying ? '#ff9800' : '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                minWidth: '70px',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                borderRadius: '50px'
              }}
            >
              {currentTrack?.id === track.id && isPlaying ? 'Пауза' : 'Старт'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPage;