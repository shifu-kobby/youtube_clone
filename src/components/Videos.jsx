import { Stack, Box } from '@mui/material';

import { ChannelCard, VideoCard } from '../components';

const Videos = ({ videos, direction }) => (
  <Stack
    direction={direction}
    display='flex'
    flexWrap='wrap'
    justifyContent='center'
    alignItems='center'
  >
    {videos.map((item, idx) => (
      <Box
        key={idx}
      >
        {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard channelDetail={item} margin="5px"/>}
      </Box>
    ))}
  </Stack>
);

export default Videos