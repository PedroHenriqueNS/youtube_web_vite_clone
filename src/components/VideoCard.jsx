import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from '@mui/icons-material'

import { demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl, demoProfilePicture } from "../utils/constants.jsx";

const VideoCard = ({ video: { id: { videoId }, snippet }, channelDetail }) => {

    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 'none', backgroundColor: '#0f0f0f' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180, borderRadius: '15px' }}
                />
            </Link>
            <CardContent sx={{ display: 'flex', backgroundColor: '#0f0f0f', height: '90px', gap: '15px' }}>
                <Link to={`/channel/${channelDetail.snippet.channelId}`}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.medium?.url || demoProfilePicture}
                        alt={snippet?.channelTitle}
                        sx={{ width: '36px', height: '35px', borderRadius: '50%', mb: 2, }}
                    />
                </Link>

                <Box width="95%">
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                        <Typography variant="subtitle2" fontWeight="bold" color="gray">
                            {snippet?.channelTitle || demoChannelTitle}
                            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                        </Typography>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    )
}

export default VideoCard