import React, { useState } from 'react';
import VideoToGifConverter from './components/videotogif';
import Header from './components/header';

function App() {
  const [videoFile, setVideoFile] = useState(null);
  const [ready, setReady] = useState(false);

  // Simulating a loading state
  setTimeout(() => {
    setReady(true);
  }, 2000);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  return ready ? (
    <div className="App">
      <Header />
      <VideoToGifConverter videoFile={videoFile} handleFileUpload={handleFileUpload} />
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
