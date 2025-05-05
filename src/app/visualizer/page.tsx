'use client';

import { useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer';
import Visualizer from '@/components/Visualizer';

export default function VisualizerPage() {
  const [audioData, setAudioData] = useState<Float32Array | undefined>();

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Lumify 🎵
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-8">
            <AudioPlayer onAudioData={setAudioData} />
          </div>
          <div className="mb-8">
            <Visualizer audioData={audioData} />
          </div>
        </div>
      </div>
    </main>
  );
} 