
import React, { useRef, useEffect, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [videosWatched, setVideosWatched] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      sources: [
        { src: 'path/to/video-720p.mp4', type: 'video/mp4', label: '720p', res: 720 },
        { src: 'path/to/video-480p.mp4', type: 'video/mp4', label: '480p', res: 480 },
        { src: 'path/to/video-320p.mp4', type: 'video/mp4', label: '320p', res: 320 }
      ]
    });

    player.on('ended', () => {
      setVideosWatched(prevWatched => prevWatched + 1);
    });

    const handleGesture = (event) => {
    };

    videoRef.current.addEventListener('gesture', handleGesture);

    return () => {
      if (player) {
        player.dispose();
      }
      videoRef.current.removeEventListener('gesture', handleGesture);
    };
  }, []);

  useEffect(() => {
    setPoints(videosWatched * 5);
  }, [videosWatched]);

  return (
    <div>
      <video ref={videoRef} className="video-js" width="640" height="264" />
      <p>Points: {points}</p>
    </div>
  );
};

export default VideoPlayer;

