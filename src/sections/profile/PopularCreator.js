import { Icon } from "@iconify/react";
import { Box, Container, Typography, Grid, Avatar, Stack, Button, Chip, useTheme } from "@mui/material";
import Image from "../../components/Image";
import { PopularCreatorsData } from "../../_mock/MockData";


export default function PopularCreator() {
    const theme = useTheme();
    return (
        <Container>
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>Popular Creators</Typography>
            <Grid container sx = {{background:'rgba(245, 88, 91, 0.1)',padding:1, borderRadius:1}}>
                {PopularCreatorsData.map((creator, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} key={index} sx={{ padding: 1,  }} >
                        <Stack alignItems={'center'} sx={{ borderRadius: 2,background:'white', position: 'relative', boxShadow: '0px 12px 26px rgb(16 30 115 / 6%)' }}>
                            <Chip label={creator.style}  sx = {{zIndex:10, position:'absolute', top:10, left:10, background:theme.palette.primary.dark, color:'white'}} />

                            <Box sx={{ width: '100%' }}>
                                <Image src={creator.cover} alt='' />
                            </Box>
                            
                            <Box mt={'-38px'} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                                <Avatar src={creator.avatar} sx={{ width: 76, height: 76 }} />
                            </Box>
                            <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', padding: 2, paddingY: 4 }}>
                                <Box>
                                    <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', }}>{creator.name}
                                        <Icon icon={`${creator.verified ? 'codicon:verified' : 'codicon:unverified'}`} width="24" color={`${creator.verified ? 'green' : 'red'}`} />
                                    </Typography>
                                    <Typography component={'p'}>
                                        {creator.amount} <b>FLM</b>
                                    </Typography>
                                </Box>
                                <Stack justifyContent={'center'}>
                                    <Button variant="contained" disabled={creator.following}>{creator.following ? 'Following' : 'Follow'}</Button>
                                </Stack>

                            </Stack>
                        </Stack>
                    </Grid>
                ))}

            </Grid>
        </Container>
    )
}