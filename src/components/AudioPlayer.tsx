'use client';

import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  onAudioData?: (data: Float32Array) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ onAudioData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  useEffect(() => {
    // Initialize Web Audio API
    audioContextRef.current = new AudioContext();
    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 2048;

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && audioRef.current) {
      const url = URL.createObjectURL(file);
      audioRef.current.src = url;
      setDuration(audioRef.current.duration);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Use currentTime and duration in a minimal way
  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };
    audio.addEventListener('timeupdate', updateTime);
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  // Use onAudioData as a placeholder for future audio data
  useEffect(() => {
    if (onAudioData) {
      onAudioData(new Float32Array(2048));
    }
  }, [onAudioData]);

  return (
    <div className="audio-player">
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileUpload}
        className="mb-4"
      />
      <div className="controls">
        <button
          onClick={togglePlayPause}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <audio ref={audioRef} />
        {/* Show current time and duration as a framework for future development */}
        <div className="text-xs text-gray-500 mt-2">
          {Math.floor(currentTime)} / {Math.floor(duration)} sec
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer; 