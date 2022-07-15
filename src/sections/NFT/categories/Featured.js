import { Icon } from "@iconify/react";
import { Container, Stack, useTheme, Typography, Box, styled, Grid, Avatar, Divider, TextField } from "@mui/material";
import { render } from "nprogress";
import { Component, useState } from "react";
import Slider from 'react-slick';
import Image from "../../../components/Image";

import { CardStyle, GradientStyle } from "../../../pages/Home";


const SLIDER_SETTING = {
    dots: false,
    infinaite: true,
    speed: 500,
    arrows: false,
}

const AUTHORS = [
    { cover: './assets/images/nft1.png', title: 'The cartoon monster Ⓡ', avatar: './assets/images/author.png', author: 'John Doe', isVerified: true, bid: 1000, time: '15 hours left' },

    { cover: './assets/images/nft1.png', title: 'The cartoon monster Ⓡ', avatar: './assets/images/author.png', author: 'John Smith', isVerified: false, bid: 300, time: '12 hours left' },

]
const IconifyLink = styled('a')(({ theme }) => (
    {
        textDecoration: 'none',
        cursor: "pointer",
        color: theme.palette.primary.main,
    }
));

export function FeaturedNFTsCarousel() {
    const [slider, setSlider] = useState(null);

    return (
        <Stack>
            <Slider ref={c => (setSlider(c))} {...SLIDER_SETTING}>
                {AUTHORS.map((author, index) => (
                    <Box sx={{ position: 'relative', display: 'flex' }} key ={index}>
                        <Box sx={{ width: '50%' }}>
                            <Image src={`${author.cover}`} alt='' />
                        </Box>
                        <Box sx={{ position: 'absolute', left: '40%', top: 0, height: '100%', display: 'flex', flexDirection: 'column' }} justifyContent={'center'}>
                            <Box>
                                <CardStyle sx={{ padding: '8px 24px 8px 24px', background: 'white', flexDirection: 'column' }}>
                                    <Typography variant="h6">{author.title}</Typography>
                                    {/* Avatar */}
                                    <Stack direction='row' gap={2}>
                                        <Avatar alt='' src={`${author.avatar}`} sx={{ width: 56, height: 56 }} />
                                        <Stack >
                                            <Typography color='gray' component="p" sx={{ display: 'flex', alignItems: 'center' }}>Creator
                                            {author.isVerified  && 
                                                <Icon icon='bxs:check-shield' width={20} color='#0e77b7' />
                                            }
                                            {!author.isVerified  && 
                                                <Icon icon='codicon:unverified' width={20} color='red' />
                                            }
                                            </Typography>
                                            <Typography>John Doe</Typography>
                                        </Stack>
                                    </Stack>
                                    <Divider/>
                                    <Stack direction = 'row' justifyContent={'space-between'}>
                                        <TextField label = 'Current Bid' defaultValue = {"1,000 FLM"} />
                                        <Typography color='gray'>15 Hours Left</Typography>
                                    </Stack>
                                </CardStyle>
                            </Box>
                        </Box>
                    </Box>
                ))
                }

            </Slider>
            <Stack direction='row'>
                <IconifyLink onClick={() => { slider.slickPrev() }}>
                    <Icon icon='eva:arrow-back-outline' width={30} />
                </IconifyLink>
                <IconifyLink onClick={() => { slider.slickNext() }}>
                    <Icon icon='akar-icons:minus' width={30} />
                    <Icon icon='eva:arrow-forward-outline' width={30} style={{ marginLeft: -10 }} />
                </IconifyLink>
            </Stack>
        </Stack>
    )

}

export default function FeaturedNFTs() {

    const theme = useTheme();
    return (
        <GradientStyle sx={{ paddingTop: 15, display: 'flex', gap: 8, flexDirection: 'column' }} >
            <Container>
                <CardStyle sx={{ padding: { xs: 2, md: 4 } }} >
                    <Grid container>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h4">
                                Featured NFTs
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <FeaturedNFTsCarousel />
                        </Grid>
                    </Grid>

                </CardStyle>
            </Container>

        </GradientStyle>
    )
}