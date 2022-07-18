import { Box, Button, ButtonGroup, Container, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import TextSpinBox from "../../components/TextSpinBox";

import Page from "../../components/Page";
import { GradientStyle } from "../Home";
import { BrandData } from "../../_mock/BrandData";
import CoporateCard from "../../components/cards/CorporateCard";
import BrowserCollection from "../../sections/NFT/categories/BrowserCollection";

export default function NFTMarketplace() {
    const theme = useTheme();
    return (
        <Page title="Create Lead">
            <GradientStyle sx={{ paddingTop: 15, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container >
                    {/* help */}
                    <Stack gap={4} alignItems={'center'} sx={{ mb: { xs: 4, sm: 8 } }}>
                        <Typography variant="h4">Create And Sell Your <span color={theme.palette.primary.dark}>NFTs</span></Typography>
                        <Grid container sx={{ background: 'url(/assets/images/market-place-dot-bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
                            <Grid item xs={6} md={3} sx={{ padding: 1 }}>
                                <Box gap={1} display={'flex'} flexDirection={"column"} sx={{ alignItems: 'center' }}>
                                    <div><img src="/assets/images/image 74.png" alt='' /></div>
                                    <Typography variant={'h5'}>Set up Your Wallet </Typography>
                                    <Typography color='gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={3} sx={{ padding: 1 }}>
                                <Box gap={1} display={'flex'} flexDirection={"column"} sx={{ alignItems: 'center' }}>
                                    <div><img src="/assets/images/image 75.png" alt='' /></div>
                                    <Typography variant={'h5'}>Create Your Collection </Typography>
                                    <Typography color='gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={3} sx={{ padding: 1 }}>
                                <Box gap={1} display={'flex'} flexDirection={"column"} sx={{ alignItems: 'center' }}>
                                    <div><img src="/assets/images/image 76.png" alt='' /></div>
                                    <Typography variant={'h5'}>Add Your NFTs </Typography>
                                    <Typography color='gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={3} sx={{ padding: 1 }}>
                                <Box gap={1} display={'flex'} flexDirection={"column"} sx={{ alignItems: 'center' }}>
                                    <div><img src="/assets/images/image 77.png" alt='' /></div>
                                    <Typography variant={'h5'}>List Them For Sale </Typography>
                                    <Typography color='gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Stack>

                </Container>

                {/* Corporate */}
                <Box padding={2} sx={{ backgroundImage: 'url(/assets/images/nft-market-bg-1.png),url(/assets/images/nft-market-bg-2.png)', backgroundPosition: 'top,bottom', backgroundRepeat: 'no-repeat, no-repeat', backgroundSize: 'cover' }} >
                    <Container>
                        <Stack gap={1} alignItems={'center'} sx = {{padding:2}}>
                            <Typography component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'end', gap: 1, mb: 4 }}>
                                <Typography variant="h4">Corporate of</Typography>
                                <TextSpinBox color={`${theme.palette.primary.dark}`} variant="h4"
                                    values={[{ id: 0, label: 'Last Week' }, { id: 1, label: 'Last Month' }]}
                                />
                            </Typography>
                        </Stack>
                        <Grid container sx={{ mb: 4 }}>
                            {BrandData.map((brand, index) => (
                                <Grid item key={index} sm={12} md={6} lg={4} padding={{ xs: 1, sm: 2 }}>
                                    <CoporateCard {...brand} />
                                </Grid>
                            ))}
                        </Grid>
                        <Box justifyContent={'center'} display={'flex'} sx={{mb:4}}>
                            <Button variant={'contained'}>GO TO RANKING</Button>
                        </Box>
                        

                    </Container>
                </Box>
                <BrowserCollection />
            </GradientStyle>
        </Page>
    )
}