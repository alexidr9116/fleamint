import { Avatar, Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import UploadAvatar from "../../components/UploadAvatar";

import Page from "../../components/Page";
import { CardStyle, GradientStyle } from "../Home";

export default function EditProfile() {
    return (
        <Page title="Edit Profile">
            <GradientStyle sx={{ paddingTop: 15,paddingBottom:4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container>
                    <CardStyle sx={{ padding: { xs: 2, sm: 4, md: 10, lg: 12 }, background: '#ffffff5a', flexDirection: 'column' }} >
                        <Stack gap={2} sx={{ mb: 4, textAlign:'center' }} >
                            <Typography variant="h4">Edit Profile</Typography>
                            <Typography color='gray'>You can set preferred display name, create your profile URL and manage other personal settings.</Typography>
                        </Stack>
                        <Stack>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={3} lg={3} sx = {{display:'flex', justifyContent:'center'}}>
                                    <UploadAvatar/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={9} lg={8}>
                                    <Stack gap={1} padding={{ lg: 2 }}>
                                        <Typography variant="h6">User Name</Typography>
                                        <TextField label="" placeholder="John Doe" />
                                        <Typography variant="h6">Email</Typography>
                                        <TextField label="" placeholder="info@yahoo.com" />
                                        <Typography variant="h6">Bio</Typography>
                                        <TextField label="" placeholder="Something About Yourself" multiline rows={4} maxRows={4} />
                                        <Typography variant="h6">Website</Typography>
                                        <TextField label="" placeholder="https://www.info.com/" />
                                        <Grid container>
                                            <Grid item xs={12} sm={6} md={4} lg={4} sx = {{paddingRight:1, paddingBottom:1}}>
                                                <Stack>
                                                    <Typography variant="h6">Facebook</Typography>
                                                    <TextField label="" placeholder="Your Facebook" />
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4} sx = {{paddingRight:1, paddingBottom:1}}>
                                                <Stack>
                                                    <Typography variant="h6">Twitter</Typography>
                                                    <TextField label="" placeholder="Your Twitter" />
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4} sx = {{paddingRight:1, paddingBottom:1}}>
                                                <Stack>
                                                    <Typography variant="h6">Instagram</Typography>
                                                    <TextField label="" placeholder="Your Instagram" />
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4} sx = {{paddingRight:1, paddingBottom:1}}>
                                                <Stack>
                                                    <Typography variant="h6">Linkedin</Typography>
                                                    <TextField label="" placeholder="Your Linkedin" />
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4} sx = {{paddingRight:1, paddingBottom:1}}>
                                                <Stack>
                                                    <Typography variant="h6">Discord</Typography>
                                                    <TextField label="" placeholder="Your Discord" />
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="h6">Wallet Address</Typography>
                                        <TextField label="" placeholder="0x123...456" sx={{mb:4}}/>
                                        <Button variant = "contained" size = "large">UPDATE PROFILE</Button>
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