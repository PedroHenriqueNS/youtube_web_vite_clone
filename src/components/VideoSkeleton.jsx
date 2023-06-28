import { Box, CardContent, Skeleton } from "@mui/material";



const VideoSkeleton = () => (
    <Box sx={{
        width: { xs: '100%', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: 'none',
        backgroundColor: '#0f0f0f'
    }}>
        <Skeleton variant="rectangular" sx={{
            width: { xs: '100%', sm: '358px', md: '320px' },
            height: 180,
            borderRadius: '15px',
            bgcolor: 'grey.900'
        }}/>
        <CardContent sx={{ display: 'flex', backgroundColor: '#0f0f0f', height: '90px', gap: '15px' }}>
            <Skeleton variant="circle" sx={{
                width: 40, height: 35, borderRadius: '50%', mb: 2,
                bgcolor: 'grey.900'
            }}
            />

            <Box width="95%">
                <Skeleton variant="rectangular" sx={{
                    width: '100%',
                    height: 20,
                    marginBottom: 1,
                    bgcolor: 'grey.900',
                    borderRadius: 1
                }}/>
                <Skeleton variant="rectangular" sx={{
                    width: '30%',
                    height: 20,
                    marginBottom: 1,
                    bgcolor: 'grey.900',
                    borderRadius: 1
                }}/>
            </Box>
        </CardContent>
    </Box>
)

export default VideoSkeleton