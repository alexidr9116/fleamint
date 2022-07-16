import { Avatar, Box, Container, Grid, Stack, TextField, Typography } from "@mui/material";

import Page from "../../components/Page";
import { CardStyle, GradientStyle } from "../Home";

export default function EditProfile() {
    return (
        <Page title="Edit Profile">
            <GradientStyle sx={{ paddingTop: 15, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container>
                    <CardStyle sx={{ padding: { xs: 2, sm: 4, md:10, lg:12 }, background:'white',flexDirection:'column' }} >
                       <Stack gap={2} sx= {{mb:4}} >
                            <Typography variant = "h4">Edit Profile</Typography>
                            <Typography color = 'gray'>You can set preferred display name, create your profile URL and manage other personal settings.</Typography>
                       </Stack>
                       <Stack>
                            <Grid container>
                                <Grid item xs ={12} sm={12} md={3} lg={3}>
                                    <Avatar src = './assets/images/card1.png' />
                                </Grid>
                                <Grid item xs ={12} sm={12} md={9} lg={9}>
                                    <Stack gap = {2} padding={{lg:2}}>
                                        <TextField label = "John Doe"/>
                                        <TextField label = "Email"/>
                                        <TextField label = "Bio" multiline rows = {4} maxRows={4}/>
                                    </Stack>
                                    
                                </Grid>
                            </Grid>
                            
                       </Stack>
                    </CardStyle>
                </Container>
            </GradientStyle>
        </Page>
    )
}