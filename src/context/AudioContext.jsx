// src/context/AudioContext.jsx
import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  
  // Базовый URL для GitHub Pages
  const baseUrl = import.meta.env.BASE_URL || '';

  // Устанавливаем максимальную громкость 15% (0.15)
  const MAX_VOLUME = 0.15;

  const tracks = [
    {
      id: 1,
      title: 'BLUE',
      artist: 'Billie Eilish',
      audioUrl: `${baseUrl}music/Billie_Eilish_-_BLUE_78654770.mp3`
    },
    {
      id: 2,
      title: 'We Found Love',
      artist: 'Rihanna',
      audioUrl: `${baseUrl}music/Rihanna_Calvin_Harris_-_We_Found_Love_48211612.mp3`
    },
    {
      id: 3,
      title: 'Forever (feat. Mario Winans)',
      artist: 'Тимати',
      audioUrl: `${baseUrl}music/Тимати - Forever (feat. Mario Winans) (hitmos.fm).mp3`
    }
  ];

  // Устанавливаем громкость при создании
  useEffect(() => {
    audioRef.current.volume = MAX_VOLUME;
  }, []);

  const playTrack = (track) => {
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      audioRef.current.src = track.audioUrl;
      audioRef.current.volume = MAX_VOLUME;
      audioRef.current.play();
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const stopTrack = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  // Обработка ошибок загрузки
  useEffect(() => {
    const handleError = (e) => {
      console.error('Audio error:', e);
      console.error('Failed URL:', audioRef.current.src);
    };
    
    audioRef.current.addEventListener('error', handleError);
    
    return () => {
      audioRef.current.removeEventListener('error', handleError);
      audioRef.current.pause();
    };
  }, []);

  const value = {
    currentTrack,
    isPlaying,
    tracks,
    playTrack,
    stopTrack
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};