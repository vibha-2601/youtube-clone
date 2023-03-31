import { Box, Stack } from '@mui/system'
import React from 'react'
import { VideoCard, ChannelCard } from '../'

const Videos = ({ videos }) => {
  console.log(videos)
  return (
    <Stack
    direction="row"
    flexWrap="Wrap"
    justifyContent="start"
    gap={2}
    >
      {
        videos.map((item, index) => (
          <Box
          key={index}
          >
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}

          </Box>
        ))
      }
      
    </Stack>
  )
}

export default Videos

