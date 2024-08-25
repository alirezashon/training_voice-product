import React, { useState } from 'react';
import styles from './index.module.css';

const parts = [1, 2, 3, 4, 5];

const AudioPlayer: React.FC = () => {
  const [currentPart, setCurrentPart] = useState<number | null>(null);

  const handlePlay = (part: number | null) => {
    setCurrentPart(part);
  };

  return (
    <div className={styles.container}>
      <div className={styles.fullAudioContainer}>
        <button
          className={styles.playButton}
          onClick={() => handlePlay(null)}
        >
          Play Full Audio
        </button>
        {currentPart === null && (
          <audio
            controls
            autoPlay
            className={styles.audioPlayer}
            onEnded={() => setCurrentPart(null)}
          >
            <source src="/api/audio" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
      {parts.map((part) => (
        <div key={part} className={styles.partContainer}>
          <span className={styles.partLabel}>Part {part}</span>
          <button
            className={styles.playButton}
            onClick={() => handlePlay(part)}
          >
            Play
          </button>
          {currentPart === part && (
            <audio
              controls
              autoPlay
              className={styles.audioPlayer}
              onEnded={() => setCurrentPart(null)}
            >
              <source src={`/api/audio?part=${part}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;
