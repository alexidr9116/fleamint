import { Box, Container, Stack, Typography } from '@mui/material';
import Image from '../../components/Image';
import { GradientStyle } from '../../pages/Home';


export default function BrandShow() {
    return (
        <GradientStyle sx={{ paddingTop: 15, display: 'flex', gap: 8, flexDirection: 'column' }} >
            <Container >
                <Stack gap={2}>
                    <Typography variant="h3">Explainer Video From Our Expert</Typography>
                    <Typography color='gray'>We work daily to become better and we are ready to share best practices.</Typography>
                    <Box>
                        <Image src='./assets/images/video-thumb.png' alt='' />
                    </Box>

                </Stack>
            </Container>
        </GradientStyle>
    )
}