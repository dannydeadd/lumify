'use client';

import { useEffect, useRef } from 'react';

interface VisualizerProps {
  audioData?: Float32Array;
}

const Visualizer: React.FC<VisualizerProps> = ({ audioData }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !audioData) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw visualization
    const barWidth = canvas.width / audioData.length;
    const barHeight = canvas.height * 0.5;

    ctx.fillStyle = '#4a90e2';
    audioData.forEach((value, index) => {
      const x = index * barWidth;
      const height = value * barHeight;
      const y = (canvas.height - height) / 2;
      
      ctx.fillRect(x, y, barWidth - 1, height);
    });
  }, [audioData]);

  return (
    <div className="visualizer-container w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default Visualizer; 