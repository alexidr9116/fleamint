import { Box, Button, FormControlLabel, Grid, Stack, Switch, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { AccountProfileData, CollectionsData } from "../../../_mock/MockData";
import Image from "../../../components/Image";
import { BackgroundImageStyle } from "../../../components/StyledComponents";
import { CardStyle } from "../../../pages/Home";
import CustomButton from "../../../components/CustomButton";
import IconfyButton from "../../../components/IconfyButton";
import { fNumber } from "../../../utils/formatNumber";



export default function CollectionCover() {
    const theme = useTheme();
    return (

        <BackgroundImageStyle sx={{ backgroundImage: 'url(/assets/images/collectionbg.png)', paddingX: { xs: 2, sm: 4, md: 8, lg: 20 }, paddingTop: 20, justifyContent: 'center', flexDirection: 'column' }}>
            {/* Awesome NFT Collections */}
            <CardStyle sx={{ flexDirection: 'column', width: '100%',  padding: 2, paddingX: 4, }}>

                <Stack direction="row" gap={2}>
                    <Grid container>
                        <Grid item xs={12} sm={4} md={3} display="flex" alignItems="center" flexDirection={'column'} justifyContent='center'>
                            <Image src='/assets/images/card1.png' alt='' />
                            <Stack direction="row" sx={{ paddingY: 2 }} gap={1}>
                                <IconfyButton icon='bxl:twitter' width={20} />
                                <IconfyButton icon='gg:facebook' width={20} />
                                <IconfyButton icon='icon-park-solid:instagram-one' width={20} />
                                <IconfyButton icon='bxl:discord-alt' width={20} />
                            </Stack>
                        </Grid>
                        {/* start Account Info  */}
                        <Grid item xs={12} sm={8} md={9} sx={{ paddingLeft: 1, mb: 1 }}>
                            {/* Name */}
                            <Stack gap={2} sx={{ mb: 2 }}>
                                <Stack gap={{lg:4, md:2}}>
                                    <Stack gap={1} alignItems={'center'}>
                                        <Typography variant="h3">Awesome NFTs Collection</Typography>

                                        <Typography sx = {{mb:2}} color={'gray'} >Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys.</Typography>

                                    </Stack>
                                    <Grid container>
                                        <Grid item sm={6} md={3} display={"flex"} flexDirection={"column"} gap={2} sx={{ paddingY: 2,px:1, mb:1, boxShadow: '0px 3px 26px rgba(16, 30, 115, 0.1)', width: '100%' }} borderRadius={1} alignItems="center" justifyContent={'center'}>
                                            <Typography variant='subject'>Items</Typography>
                                            <Typography variant="h5">{fNumber(24440)}</Typography>
                                        </Grid>
                                        <Grid item sm={6} md={3} display={"flex"} flexDirection={"column"} gap={2} sx={{ paddingY: 2,px:1,  mb:1, boxShadow: '0px 3px 26px rgba(16, 30, 115, 0.1)', width: '100%' }} borderRadius={1} alignItems="center" justifyContent={'center'}>
                                            <Typography variant='subject'>Items</Typography>
                                            <Typography variant="h5">{fNumber(24440)}</Typography>
                                        </Grid>
                                        <Grid item sm={6} md={3} display={"flex"} flexDirection={"column"} gap={2} sx={{ paddingY: 2,px:1, mb:1, boxShadow: '0px 3px 26px rgba(16, 30, 115, 0.1)', width: '100%' }} borderRadius={1} alignItems="center" justifyContent={'center'}>
                                            <Typography variant='subject'>Items</Typography>
                                            <Typography variant="h5">{fNumber(24440)}</Typography>
                                        </Grid>
                                        <Grid item sm={6} md={3} display={"flex"} flexDirection={"column"} gap={2} sx={{ paddingY: 2,px:1, mb:1, boxShadow: '0px 3px 26px rgba(16, 30, 115, 0.1)', width: '100%' }} borderRadius={1} alignItems="center" justifyContent={'center'}>
                                            <Typography variant='subject'>Items</Typography>
                                            <Typography variant="h5">{fNumber(24440)}</Typography>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Stack>

                        </Grid>

                        {/* end collection info */}
                    </Grid>
                </Stack>
            </CardStyle>
            {/* end of collection infomation */}

        </BackgroundImageStyle>
    )
}