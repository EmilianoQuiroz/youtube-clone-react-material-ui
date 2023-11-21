import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=data`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,232,1) 35%, rgba(0,212,255,1) 100%)', 
        zIndex: 10,
        height: '300px'
        }}
        />
          <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
    </Box>
  )
}

export default ChannelDetail