import { Button, FormControlLabel, Grid, Stack, Switch, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { AccountProfileData, CollectionsData } from "../../_mock/MockData";
import Image from "../../components/Image";
import { BackgroundImageStyle } from "../../components/StyledComponents";
import { CardStyle } from "../../pages/Home";
import CustomButton from "../../components/CustomButton";
import IconfyButton from "../../components/IconfyButton";
import NFTCard from "../../components/cards/NFTCard";



export default function ProfileCover({ isYou }) {
    const theme = useTheme();
    return (

        <BackgroundImageStyle sx={{ backgroundImage: 'url(/assets/images/profilebg.png)', paddingX: { xs: 2, sm: 4, md: 8, lg: 20 }, paddingTop: 20, justifyContent: 'center', flexDirection: 'column' }}>
            {/* Account Infomation Card */}
            <CardStyle sx={{ flexDirection: 'column', width: '100%', background: 'white', padding: 2, paddingX: 4, }}>
                <Stack justifyContent={'end'} sx={{ mb: 2 }}>
                    <FormControlLabel control={<Switch color="error" />} label="Private Your Profile?" labelPlacement="start" />
                </Stack>

                <Stack direction="row" gap={2}>
                    <Grid container>
                        <Grid item xs={12} sm={4} md={3}>
                            <Image src={AccountProfileData.avatar} alt='' />
                        </Grid>
                        {/* start Account Info  */}
                        <Grid item xs={12} sm={8} md={9} sx={{ paddingLeft: 1, mb: 1 }}>
                            {/* Name */}
                            <Stack gap={2} sx={{ mb: 2 }}>
                                <Stack direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }} justifyContent={'space-between'}>
                                    <Stack direction='row' gap={1} alignItems={'center'}>
                                        <Typography variant="h3" sx={{ py: 2 }}>{AccountProfileData.name}</Typography>
                                        <Icon icon='ei:trophy' width={40} color={AccountProfileData.leaderColor} sx={{ mb: 2 }} />
                                        <Typography color={AccountProfileData.leaderColor} sx={{ marginLeft: -2 }}>({AccountProfileData.leaderLevel})</Typography>
                                    </Stack>
                                    {isYou &&
                                        <Stack direction={{ xs: 'column', sm: "row" }} alignItems="center" gap={2}>

                                            <CustomButton sx={{ height: 40 }}>View My Ranking</CustomButton>
                                            <Button sx={{ height: 40 }} variant="contained">Edit Profile</Button>
                                        </Stack>
                                    }
                                    {!isYou &&
                                        <Stack direction={{ xs: 'column', sm: "row" }} alignItems="center" justifyContent={'end'} gap={2}>

                                            <Button sx={{ height: 40 }} variant="contained">Follow</Button>
                                        </Stack>
                                    }
                                </Stack>
                            </Stack>
                            {/* description */}
                            <Typography color="gray" paddingY={{ xs: 2, lg: 1 }}>{AccountProfileData.description}</Typography>
                            {/* Followers */}
                            <Stack direction={{ md: 'row', sm: 'column', xs: 'column' }} justifyContent="space-between" ml={{ lg: 0, md: -10, sm: 0 }}>
                                <Stack justifyContent={'space-between'} direction="row" padding={2} sx={{ borderRadius: 1, background: '#f5585b1a' }} gap={3}>
                                    <Typography component={'p'} variant="h4">
                                        {AccountProfileData.following}<br />
                                        <small style={{ color: 'gray', fontWeight: 400, fontSize: 16 }}>Following</small>
                                    </Typography>
                                    <Typography component={'p'} variant="h4">
                                        {AccountProfileData.followers}<br />
                                        <small style={{ color: 'gray', fontWeight: 400, fontSize: 16 }}>Followers</small>
                                    </Typography>
                                    <Typography component={'p'} variant="h4">
                                        {AccountProfileData.like}<br />
                                        <small style={{ color: 'gray', fontWeight: 400, fontSize: 16 }}>Like</small>
                                    </Typography>
                                </Stack>
                                <Stack direction="row" sx={{ paddingY: 4 }} gap={1}>
                                    <IconfyButton icon='bxl:twitter' width={30} />
                                    <IconfyButton icon='gg:facebook' width={30} />
                                    <IconfyButton icon='icon-park-solid:instagram-one' width={30} />
                                    <IconfyButton icon='bxl:discord-alt' width={30} />
                                </Stack>
                            </Stack>
                        </Grid>

                        {/* end account info */}
                    </Grid>
                </Stack>
            </CardStyle>
            {/* end of account infomation */}

        </BackgroundImageStyle>
    )
}