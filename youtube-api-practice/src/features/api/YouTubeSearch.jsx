import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeSearch = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const searchYouTube = async () => {
      try {
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: 'snippet',
            maxResults: 10,
            q: 'ムカイ',
            type: 'video',
            key: apiKey
          }
        });

        setVideos(response.data.items);
      } catch (error) {
        console.error('YouTube API Error:', error);
      }
    };

    searchYouTube();
  }, []);

  return (
    <div>
      <h1>YouTube検索結果</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id.videoId}>
            {video.snippet.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeSearch;
