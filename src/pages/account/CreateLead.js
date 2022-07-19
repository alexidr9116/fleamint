import { Box, Button, Container, Grid, Stack, TextField, Typography, } from '@mui/material';

import UploadNFTs from '../../components/UploadNFT';
import Page from "../../components/Page";
import { CardStyle, GradientStyle } from "../Home";


export default function CreateLead() {
    return (
        <Page title="Create Lead">
            <GradientStyle sx={{ paddingTop: 15, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container>
                    <CardStyle sx={{ padding: { xs: 2, sm: 4, md: 10, lg: 12 },flexDirection: 'column' }} >
                        <Stack gap={1} sx={{ mb: 4, }} >
                            <Typography variant="h3" sx={{ mb: 2 }}>Create Lead</Typography>
                            <Typography variant="h6">Lead Image</Typography>
                            <Typography color='gray'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB.</Typography>
                            <UploadNFTs />
                        </Stack>

                        <Grid container sx={{ mb: 4 }}>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Lead Owner </Typography>
                                <TextField size="small" label="" placeholder='Crypto Kambok' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Name </Typography>
                                <TextField size="small" label="" placeholder='John Dao' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Title </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Email </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Phone </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Fax </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Mobile </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Website </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Lead Source </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Lead Status </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Industry </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">No Of Employes </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Annual Revenue </Typography>
                                <TextField size="small" label="" placeholder='$' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Rating </Typography>
                                <TextField size="small" label="" placeholder='None' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Skype ID </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Secondary Email </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Twitter </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Email Opt Out </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                        </Grid>
                        <Typography variant="h4" sx={{ mb: 2 }}> Address Infomation</Typography>
                        <Grid container sx={{ mb: 4 }}>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Street </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">City </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">State </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Zip Code </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Country </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} sx = {{padding:{xs:1, sm:2, }}}>
                                <Button variant="contained" fullWidth sx={{ height: 50 }}>CREATE</Button>
                            </Grid>
                        </Grid>
                    </CardStyle>
                </Container>
            </GradientStyle>
        </Page>
    )

}