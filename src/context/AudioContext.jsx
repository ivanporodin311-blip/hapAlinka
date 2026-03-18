import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  // Устанавливаем максимальную громкость 35% (0.35)
  const MAX_VOLUME = 0.15;

  const tracks = [
    {
      id: 1,
      title: 'BLUE',
      artist: 'Billie Eilish',
      audioUrl: '/music/Billie_Eilish_-_BLUE_78654770.mp3'
    },
    {
      id: 2,
      title: 'We Found Love',
      artist: 'Rihanna',
      audioUrl: '/music/Rihanna_Calvin_Harris_-_We_Found_Love_48211612.mp3'
    },
    {
      id: 3,
      title: 'Forever (feat. Mario Winans)',
      artist: 'Тимати',
      audioUrl: '/music/Тимати - Forever (feat. Mario Winans) (hitmos.fm).mp3'
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
      audioRef.current.volume = MAX_VOLUME; // Устанавливаем громкость для нового трека
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

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
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