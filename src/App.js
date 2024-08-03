// src/App.js
import React, { useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoCall from './VideoCall';
import { applyTheme } from './Utils';

function App() {
  useEffect(() => {
    const userLocation = "South India"; // Replace with actual location detection logic
    applyTheme(userLocation);
  }, []);

  return (
    <div className="App">
      <h1>Video Player</h1>
      <VideoPlayer />
      <h2>Video Call</h2>
      <VideoCall />
    </div>
  );
}

export default App;


