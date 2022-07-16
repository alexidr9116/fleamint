import { Box, Container, Grid, Stack, Typography, useTheme, } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import IconfyButton from '../../components/IconfyButton';
import Image from '../../components/Image';
import { GradientStyle } from '../../pages/Home';

const DETAILS = [
    { title: "Advisory", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { title: "Onboarding To Platform", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { title: "How To Mint NFT", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { title: "How To Buy & Sell An NFT", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { title: "How To Navigate The Platform", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
]

export default function BrandShow() {
    const theme = useTheme();
    return (
        <GradientStyle sx={{ paddingTop: 20, display: 'flex', gap: 8, flexDirection: 'column' }} >
            <Container >
                <Stack gap={1} textAlign="center" sx={{ mb: 4 }}>
                    <Typography variant="h3">Explainer Video From Our Expert</Typography>
                    <Typography color='gray' sx={{ mb: 4 }}>We work daily to become better and we are ready to share best practices.</Typography>
                    {/* VIDEO */}
                    <Box sx={{ position: 'relative' }}>
                        <Image src='/assets/images/video-thumb.png' alt='' />
                        <Box sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <IconfyButton icon='bi:play-fill' width={40} />
                        </Box>
                    </Box>
                </Stack>
                <Grid container sx={{ padding: 2 }}>
                    <Grid item xs={12} sm={5} md={6} sx={{ display: 'flex', gap: 2, flexDirection: 'column' }} >
                        <CustomButton size="90%">Real Estate - NFT</CustomButton>
                        <CustomButton size="90%">Jewelry</CustomButton>
                        <CustomButton size="90%">Wines</CustomButton>
                        <CustomButton size="90%">Motor Cars</CustomButton>
                        <CustomButton size="90%">Advisory</CustomButton>
                        <CustomButton size="90%">Collectables</CustomButton>

                    </Grid>
                    <Grid item xs={12} sm={5} md={6}>
                        {DETAILS.map((detail, index) => (
                            <Stack gap={2} sx={{ mb: 4 }} key = {index}>
                                <Typography variant='h3' color={theme.palette.primary.main}>{detail.title}</Typography>
                                <Typography component='p' color='gray'>
                                    {detail.content}
                                </Typography>
                            </Stack>
                        ))}

                    </Grid>
                </Grid>
            </Container>
        </GradientStyle>
    )
}