import { FormControlLabel, Grid, Stack, Switch,Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { AccountProfileData } from "../../_mock/MockData";
import Image from "../../components/Image";
import { BackgroundImageStyle } from "../../components/StyledComponents";
import { CardStyle } from "../../pages/Home";


export default function ProfileCover() {
    return (
        <BackgroundImageStyle sx={{ background: 'url(./assets/images/profilebg.png)', paddingX:{xs:2,sm:4,md:20}, paddingTop: 20, justifyContent: 'center' }}>
            <CardStyle sx={{ flexDirection: 'column', width:'100%',background:'white', padding:2,paddingX:4, }}>
                <Stack justifyContent={'end'}>
                    <FormControlLabel control={<Switch color="error" />} label="Private Your Profile?" labelPlacement="start" />
                </Stack>

                <Stack direction="row" gap={2}>
                    <Grid container>
                        <Grid item xs={12} sm = {4} md={3}>
                            <Image src ={AccountProfileData.avatar} alt='' />
                        </Grid>
                        <Grid item xs={12} sm = {8} md={9}>
                            <Stack gap = {2}>
                                <Stack direction = {{sm:'column', md:'row'}}>
                                    <Stack direction = 'row' gap={2}>
                                        <Typography variant = "h5">{AccountProfileData.name}</Typography>
                                        <Icon icon = 'ei:trophy' width = {40} color = {AccountProfileData.leaderColor}/>
                                        <Typography color = {AccountProfileData.leaderColor} >{AccountProfileData.leaderLevel}</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Image src ={AccountProfileData.avatar} alt='' />
                        </Grid>
                    </Grid>
                </Stack>
            </CardStyle>
        </BackgroundImageStyle>
    )
}