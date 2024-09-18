import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeChannelInfo = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const apiKey = 'AIzaSyAJ5NSeHVAcG68IZ3Lo5TPRTxXqBCo0Yvw'; // 발급받은 API 키를 입력하세요.
  const channelId = 'UC_x5XG1Ov2P6uZZ5FSM9Ttw'; // 가져올 채널 ID를 입력하세요.

  useEffect(() => {
    const fetchChannelInfo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`
        );
        setChannelInfo(response.data.items[0]);
      } catch (error) {
        console.error('채널 정보를 가져오는 중 오류 발생:', error);
      }
    };

    fetchChannelInfo();
  }, [apiKey, channelId]);

  if (!channelInfo) {
    return <div>채널 정보를 로드 중입니다...</div>;
  }

  return (
    <div>
      <h2>{channelInfo.snippet.title}</h2>
      <p>구독자 수: {channelInfo.statistics.subscriberCount}</p>
      <p>동영상 수: {channelInfo.statistics.videoCount}</p>
      <p>채널 설명: {channelInfo.snippet.description}</p>
    </div>
  );
};

export default YouTubeChannelInfo;