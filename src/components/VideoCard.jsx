import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
    <Card sx={{ width: { xs: '100%', sm: '260px', md: '280px' }, height: '280px', backgroundColor: '#000', border: '1px solid #fff', margin: '5px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width: { xs: '100%', sm: '260px', md: '280px' }, height: 160, borderRadius: '16px' }}
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
                <Typography variant='subtitle2' fontWeight='bold' color='gray'>
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