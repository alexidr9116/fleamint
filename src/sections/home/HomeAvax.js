import { Button, Grid, Stack, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import { RootStyle } from "../../components/StyledComponents";
import Image from "../../components/Image";



export default function HomeAvax() {
    const theme = useTheme();
    return (
        <Box gap={4}>
            {/* Become a creator */}
            <Grid container padding={{ xs: 2, sm: 4, md: 8 }}>
                <Grid item md={6} sm={12} paddingX={{ sm: 10, lg: 14 }}>
                    <Image src='/assets/images/image 150.png' alt='' width={'100%'} />
                </Grid>
                <Grid item md={6} sm={12}>
                    <Stack gap={4}>
                        <Typography variant="h3">
                            How To Become Creator For <span style={{ color: theme.palette.primary.dark }}>Beginners</span>
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                        <Box>
                            <Button variant="contained" sx={{ paddingX: 10, paddingY: 1 }}>Get Started</Button>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <RootStyle sx={{ padding: { md: 10, sm: 6, xs: 4, } }}>
                <Typography variant='h3'>
                    AVAX - Speed, Security, Green Credentials, Potential For Multi Chain NFTs
                </Typography>
                <Typography>
                    Blisteringly fast, green blockchain with surprisingly low costs of usage. PoS means no wasteful mining with huge electricity generation costs. Theoretically infinite Transactions per second and a cross chain approach through the application of EVM technology makes Avax the natural choice for our company
                </Typography>
                <Button variant="outlined" size='large' sx={{ color: theme.palette.primary.dark, paddingX: 10, paddingY: 2, background: 'white', borderColor: 'white', '&:hover': { background: 'transparent', borderColor: 'white', color: 'white' } }}><Typography variant="h6">Connect Wallet</Typography></Button>
            </RootStyle>
            {/* Corporate */}
            <Grid container sx={{ padding: { md: 10, sm: 6, xs: 4, } }}>
                <Grid item xs={12} md={6} gap={4} >
                    <Typography variant="h3">Coporate</Typography>
                    <Stack gap={2}>

                        <ul className='text-ul'>
                            <li>
                                Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                            </li>
                            <li>
                                Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                            </li>
                            <li>
                                Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                            </li>
                            <li>
                                Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                            </li>
                        </ul>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} paddingX={{ xs: 4, md: 8, }} >
                    <Image src='/assets/images/image 10.png' alt="" width={'100%'} />
                </Grid>


            </Grid>
            {/* Giving Back */}
            <Grid container padding={{ xs: 2, sm: 4, md: 8 }} >
                <Grid item xs={12} md={6} paddingX={{ xs: 4, md: 8 }} marginBottom={4}>
                    <Image src='/assets/images/image 177.png' alt="" width={'100%'} />
                </Grid>
                <Grid item xs={12} md={6} gap={4} >
                    <Typography variant="h3">Giving Back</Typography>
                    <Stack gap={2}>
                        <Typography>
                            We offer services to the charities that can change and save lives all over the world, every single day, for free. Giving back to the community and others in neeed is a core tenet of our philisophy and our community.
                        </Typography>
                        <ul className = 'text-ul'>
                            <li>
                                Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                            </li>
                            <li>
                                Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                            </li>
                            <li>
                                Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                            </li>
                            <li>
                                Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                            </li>
                        </ul>
                    </Stack>
                </Grid>

            </Grid>

        </Box>

    )
}