
// @mui
import { styled,  } from '@mui/material/styles';
import { Grid,  Typography, Stack, Box, } from '@mui/material';

// components
import RouterLink from '../../components/RouterLink';
import { GradientStyle } from '../../pages/Home';
import { purplePreset } from '../../utils/getColorPresets';
import IconButton  from '../../components/IconButton';
// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    paddingBottom: 10,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {

    return (
        <RootStyle>

            <Box sx={{ pt: 4, }} >
                <Grid
                    container
                    justifyContent={{ xs: 'center', md: 'space-between' }}
                    sx={{ textAlign: { xs: 'center', md: 'left' } }}
                >
                    <Box sx={{ paddingY: 2, width: '100%', background: purplePreset.lighter }}>
                        <Grid container justifyContent={'center'}>
                            <Grid item xs={6} sm={4} lg={2} display={'flex'} justifyContent={'center'} padding={1}><img src='./assets/images/coinbase.png' alt='coinbase' width={'100%'} /></Grid>
                            <Grid item xs={6} sm={4} lg={2} display={'flex'} justifyContent padding={1}><img src='./assets/images/combinator.png' alt='combinator' width={'100%'} /></Grid>
                            <Grid item xs={6} sm={4} lg={2} display={'flex'} justifyContent padding={1}> <img src='./assets/images/dapper.png' alt='dapper' width={'100%'} /></Grid>
                            <Grid item xs={6} sm={4} lg={2} display={'flex'} justifyContent padding={1}><img src='./assets/images/quant.png' alt='quant' width={'100%'} loading='lazy' /></Grid>
                            <Grid item xs={6} sm={4} lg={2} display={'flex'} justifyContent padding={1}><img src='./assets/images/blockchain.png' alt='blockchain' /></Grid>
                        </Grid>
                    </Box>

                    <GradientStyle sx={{ mb: 3, width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingTop: { xs: 2, sm: 10 }, paddingX: { xs: 2, sm: 10 } }}>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Marketplace</Typography>
                            <RouterLink to='/' color='gray'>All NFTs</RouterLink>
                            <RouterLink to='/' color='gray'>Solana NFTs</RouterLink>
                            <RouterLink to='/' color='gray'>Art</RouterLink>
                            <RouterLink to='/' color='gray'>Collectibles</RouterLink>
                            <RouterLink to='/' color='gray'>Domain Names</RouterLink>
                            <RouterLink to='/' color='gray'>Music</RouterLink>
                        </Stack>

                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>My Account</Typography>
                            <RouterLink to='/' color='gray'>Profile</RouterLink>
                            <RouterLink to='/' color='gray'>Favorites</RouterLink>
                            <RouterLink to='/' color='gray'>Watchlist</RouterLink>
                            <RouterLink to='/' color='gray'>My Collections</RouterLink>
                        </Stack>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Resources</Typography>
                            <RouterLink to='/' color='gray'>Help Center</RouterLink>
                            <RouterLink to='/' color='gray'>Platform Status</RouterLink>
                            <RouterLink to='/' color='gray'>Partners</RouterLink>
                            <RouterLink to='/' color='gray'>Gas-Free Marketplace</RouterLink>
                            <RouterLink to='/' color='gray'>Blog</RouterLink>

                        </Stack>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Stats</Typography>
                            <RouterLink to='/' color='gray'>Rankings</RouterLink>
                            <RouterLink to='/' color='gray'>Activity</RouterLink>
                        </Stack>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Company</Typography>
                            <RouterLink to='/' color='gray'>About</RouterLink>
                            <RouterLink to='/' color='gray'>Career</RouterLink>
                        </Stack>
                    </GradientStyle>

                </Grid>


            </Box>
            <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row', }} paddingX={{ xs: 4, md: 10 }} justifyContent={'space-between'} alignItems={"center"} gap={2}>
                <Typography component='div'>
                    ® 2022. All Right Reserved   |
                    <RouterLink color='gray' to="/">  Privacy Policy</RouterLink> |
                    <RouterLink color='gray' to="/">  Term Of Use</RouterLink>
                </Typography>
                <Box display={'flex'} gap={2}>
                    <IconButton icon='bxl:twitter'   />
                    <IconButton icon='gg:facebook'/>
                    <IconButton icon='bxl:instagram-alt'/>
                    <IconButton icon='bxs:camera'/>
                </Box>
            </Box>
        </RootStyle>
    );
}
