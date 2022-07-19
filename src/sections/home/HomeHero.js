import { Icon } from "@iconify/react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Zoom } from 'swiper';
import Image from "../../components/Image";

import { IconifyLink } from "../../components/StyledComponents";
import RouterLink from "../../components/RouterLink";

const SLIDER_SETTING = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    pagination: false,
    slidesPerView: 2,
    spaceBetween: 50,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 180,
        modifier: 3,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}

export default function HomeHero() {
    const [slider, setSlider] = useState(null);
    const theme = useTheme();

    return (
        <Grid container paddingX={{ xs: 2, sm: 4, md: 8 }}>
            <Grid item md={6} xs={12} sm = {12}>
                <Stack gap={2} sx = {{mb:4}} mt={{md:20}}>

                    <Typography variant="h3">
                        Discover, Collect and sell extraordinay
                        <span style={{ color: theme.palette.primary.dark }}> NFTs</span>
                    </Typography>

                    <Typography >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </Typography>
                    <Stack direction="row" gap={2}>
                        <Button  variant="contained" sx={{ paddingX: 6 }} size="large"><RouterLink color='white' to = '/market-place/nft'>Explore</RouterLink></Button>
                        <Button variant="outlined" sx={{ paddingX: 6 }} size="large"><RouterLink color = {theme.palette.primary.main} to = '/market-place/create-nft'>Create</RouterLink></Button>
                    </Stack>
                </Stack>
            </Grid>
            {/* SWIPER SLIDER  */}
            <Grid item xs = {12} md={6} sm={12} sx={{ xs:{padding: '50px 0'},md:{paddingTop:0} }}>
                <div style={{ position: 'relative'}}>
                    <Swiper {...SLIDER_SETTING} modules={[Navigation, EffectCoverflow]}>
                        <SwiperSlide><img src='/assets/images/header1.png' alt='' width="100%" /></SwiperSlide>
                        <SwiperSlide><img src='/assets/images/header2.png' alt='' width="100%"/></SwiperSlide>
                        <SwiperSlide><img src='/assets/images/header3.png' alt='' width="100%"/></SwiperSlide>
                    </Swiper>
                    <Stack direction='row' pt={{xs:1,md:2}} justifyContent='center'>
                        <IconifyLink className="swiper-button-prev">
                            <Icon icon='eva:arrow-back-outline' width={30} />
                        </IconifyLink>
                        <IconifyLink className="swiper-button-next">
                            <Icon icon='akar-icons:minus' width={30} />
                            <Icon icon='eva:arrow-forward-outline' width={30} style={{ marginLeft: -10 }} />
                        </IconifyLink>
                    </Stack>
                    <img src='/assets/images/reddot-rec.png' alt='' className='absolute dots1' />
                    <img src='/assets/images/reddot-ver.png' alt='' className='absolute dots2' />
                    <img src='/assets/images/reddot-ver.png' alt='' className='absolute dots3' />
                    
                </div>
            </Grid>
        </Grid>


    )
}