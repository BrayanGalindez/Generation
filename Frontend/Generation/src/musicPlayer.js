import { useEffect, useRef, useState } from 'react';

const useMusicPlayer = (musicURL) => {
  const [volume, setVolume] = useState(() => Number(localStorage.getItem('musicVolume')) || 50);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    localStorage.setItem('musicVolume', volume);
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const playMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseMusic = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = new Audio(musicURL);
    audioRef.current = audio;
    audio.volume = volume / 100;

    return () => {
      pauseMusic();
      audioRef.current = null;
    };
  }, []); // Ejecutar solo una vez al cargar el componente

  return { setVolume, playMusic, pauseMusic, volume, isPlaying };
};

export default useMusicPlayer;