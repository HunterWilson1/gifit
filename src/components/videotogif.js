import React, { useState } from 'react';
import gifshot from 'gifshot';

const VideoToGifConverter = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [gifImage, setGifImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const convertToGif = () => {
    setIsLoading(true);

    // Configure gifshot options
    const options = {
      video: [URL.createObjectURL(videoFile)],
      gifWidth: 400,
      gifHeight: 400,
    };

    gifshot.createGIF(options, (obj) => {
      if (!obj.error) {
        setGifImage(obj.image);
      }

      setIsLoading(false);
    });
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      {videoFile && (
        <div className="aspect-w-16 aspect-h-9 mb-4 max-w-md">
          <video
            className="rounded"
            controls
            width="100%"
            src={URL.createObjectURL(videoFile)}
          ></video>
        </div>
      )}
      <input
        type="file"
        accept="video/*"
        onChange={handleFileUpload}
        className="my-4 p-2 bg-green-300 rounded"
      />
      <button
        onClick={convertToGif}
        disabled={!videoFile || isLoading}
      >
        {isLoading ? 'Converting...' : 'Convert to GIF'}
      </button>
      {gifImage && (
        <img
          src={gifImage}
          alt="Converted GIF"
          className="mt-4 max-w-md rounded"
        />
      )}
    </div>
  );
};

export default VideoToGifConverter;
