
// @mui
import { styled,  } from '@mui/material/styles';
import { Grid,  Typography, Stack, Box, } from '@mui/material';

// components
import RouterLink from '../../components/RouterLink';
import { GradientStyle } from '../../pages/Home';
import { purplePreset } from '../../utils/getColorPresets';
import IconfyButton  from '../../components/IconfyButton';
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
                            <Grid item xs={6} sm={4} lg={2} display={'flex'} justifyContent={'center'} padding={1}><img src='/assets/images/coinbase.png' alt='coinbase' width={'100%'} /></Grid>
                            <Grid item xs={6} sm={4} lg={2} display={'flex'} justifyContent padding={1}><img src='/assets/images/combinator.png' alt='combinator' width={'100%'} /></Grid>
                            <Grid item xs={6} sm={4} lg={2} display={'flex'} justifyContent padding={1}> <img src='/assets/images/dapper.png' alt='dapper' width={'100%'} /></Grid>
                            <Grid item xs={6} sm={4} lg={2} display={'flex'} justifyContent padding={1}><img src='/assets/images/quant.png' alt='quant' width={'100%'} loading='lazy' /></Grid>
                            <Grid item xs={6} sm={4} lg={2} display={'flex'} justifyContent padding={1}><img src='/assets/images/blockchain.png' alt='blockchain' /></Grid>
                        </Grid>
                    </Box>

                    <GradientStyle sx={{ mb: 3, width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingTop: { xs: 2, sm: 10 }, paddingX: { xs: 2, sm: 10 } }}>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Marketplace</Typography>
                            <RouterLink to='/market-place/nft' color='gray'>All NFTs</RouterLink>
                            <RouterLink to='/market-place/nft' color='gray'>Solana NFTs</RouterLink>
                            <RouterLink to='/market-place/nft' color='gray'>Art</RouterLink>
                            <RouterLink to='/market-place/nft' color='gray'>Collectibles</RouterLink>
                            <RouterLink to='/market-place/nft' color='gray'>Domain Names</RouterLink>
                            <RouterLink to='/market-place/nft' color='gray'>Music</RouterLink>
                        </Stack>

                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>My Account</Typography>
                            <RouterLink to='/account/profile/151' color='gray'>Profile</RouterLink>
                            <RouterLink to='/account/profile/151' color='gray'>Favorites</RouterLink>
                            <RouterLink to='/account/profile/151' color='gray'>Watchlist</RouterLink>
                            <RouterLink to='/account/profile/151' color='gray'>My Collections</RouterLink>
                        </Stack>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Resources</Typography>
                            <RouterLink to='/account/help' color='gray'>Help Center</RouterLink>
                            <RouterLink to='/account/analystic' color='gray'>Platform Status</RouterLink>
                            <RouterLink to='/' color='gray'>Partners</RouterLink>
                            <RouterLink to='/market-place' color='gray'>Gas-Free Marketplace</RouterLink>
                            <RouterLink to='/blogs' color='gray'>Blog</RouterLink>

                        </Stack>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Stats</Typography>
                            <RouterLink to='/market-place/leader-board' color='gray'>Rankings</RouterLink>
                            <RouterLink to='/market-place/leader-board' color='gray'>Activity</RouterLink>
                        </Stack>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Company</Typography>
                            <RouterLink to='/about' color='gray'>About</RouterLink>
                            <RouterLink to='/about' color='gray'>Career</RouterLink>
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
                    <IconfyButton icon='bxl:twitter'   />
                    <IconfyButton icon='gg:facebook'/>
                    <IconfyButton icon='bxl:instagram-alt'/>
                    <IconfyButton icon='bxs:camera'/>
                </Box>
            </Box>
        </RootStyle>
    );
}
