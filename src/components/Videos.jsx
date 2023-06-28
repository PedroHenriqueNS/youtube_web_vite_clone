import { Stack, Box, Skeleton, CardMedia, Typography, CardContent } from "@mui/material";

import { VideoCard, ChannelCard, VideoSkeleton } from "./";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoVideoTitle, demoVideoUrl } from "../utils/constants.jsx";
import { CheckCircle } from "@mui/icons-material";



const Videos = ({ videos, direction = 'row' }) => {

    return (
        <Stack
            direction={direction}
            flexWrap="wrap"
            justifyContent="start"
            gap={2}
        >
            {!videos?.length ?
                <><VideoSkeleton /><VideoSkeleton /><VideoSkeleton /><VideoSkeleton /><VideoSkeleton /><VideoSkeleton /><VideoSkeleton /></>
                :
                videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} channelDetail={item}/>}
                    {item.id.channelId && <ChannelCard channelDetail={item}/>}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos