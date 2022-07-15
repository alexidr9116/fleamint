import { Button, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function HomeHero() {
    const theme = useTheme();
    return (

        <Grid container padding={{xs:2,sm:4, md:8}}>
            <Grid item md={6} sm={12}>
                <Stack gap={2}>
                
                    <Typography variant="h3">
                        Discover, Collect and sell extraordinay
                        <span style = {{color:theme.palette.primary.dark}}> NFTs</span>
                    </Typography>

                    <Typography >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </Typography>
                    <Stack direction="row" gap={2}>
                        <Button variant="contained" sx={{ paddingX: 6 }} size="large">Explore</Button>
                        <Button variant="outlined" sx={{ paddingX: 6 }} size="large">Create</Button>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item md={6} sm={12}>

                <Stack >
                    SLIDER
                </Stack>
            </Grid>
        </Grid>


    )
}