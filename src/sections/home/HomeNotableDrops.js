import { Button, Box, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Slider from 'react-slick';
import { NotableDropsData } from "../../_mock/MockData";
import Image from "../../components/Image";
import SliderWrapper from "../../components/SlickSliderStyle";


const SLICK_SETTING = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 4, 
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
}

export default function HomeNotableDrops() {
    const theme = useTheme();
    return (
        <Box gap={2} paddingX={{ xs: 2, sm: 4, md: 8 }}>
            <Box justifyContent={'space-between'} display='flex' alignItems={'center'}>
                <Typography variant="h3">Notable Drops</Typography>
                <Typography variant="h5" sx={{ cursor: "pointer" }}>- View All</Typography>
            </Box>
            {/* carousel */}
            <Box>
            <SliderWrapper>
                <Slider {...SLICK_SETTING}>
                    {NotableDropsData.map((data, index) => (
                        <div key = {index}>
                            <Box sx={{ gap: 2, padding:2}}>
                                <Image src={`${data.image}`} alt='' />
                                <Typography variant ='h5'>{data.title}</Typography>
                                <Typography  color = 'gray'>{data.description}</Typography>
                            </Box>
                        </div>
                    ))}

                </Slider>
            </SliderWrapper>
            </Box>

        </Box>
    )
}