import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
    <Card sx={{ width: { md: '280px', xs: '100%' }, height: '280px', backgroundColor: '#000' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width: '100%', height: 160, borderRadius: '16px', objectFit: 'cover'}}
            />
        </Link>
        <CardContent
            sx={{ backgroundColor: '#000', height: '106px', boxShadow: 'none', borderRadius: 0 }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                    {snippet?.demoChannelTitle || demoChannelTitle}
                    <CheckCircle
                        sx={{ fontSize: 12, color: 'gray', ml: '5px' }}
                    />
                </Typography>
            </Link>
        </CardContent>
    </Card>
);

export default VideoCard