import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const YoutubePlayer = () => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    // const API_KEY = "AIzaSyAJ5NSeHVAcG68IZ3Lo5TPRTxXqBCo0Yvw";
    const VIDEO_ID = "x52UZO2_ln4"; // 보여주고 싶은 YouTube 영상 ID

    // API를 사용하여 videoId를 가져오는 경우 (예: 검색 결과에서 첫 번째 영상)
    // const fetchVideoId = async () => {
    //   try {
    //     const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=YOUR_SEARCH_QUERY&part=snippet`);
    //     setVideoId(response.data.items[0].id.videoId);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // fetchVideoId();

    // 직접 videoId를 설정하는 경우
    setVideoId(VIDEO_ID); 
  }, []);

  return (
    <div>
      {videoId && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YoutubePlayer;