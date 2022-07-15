import { Icon } from "@iconify/react";
import { Container, Grid, Stack, Typography, useTheme } from "@mui/material";


export default function SendMessage(){
    const theme = useTheme();

    return(
        <Container>
            <Grid container>
                <Grid item xs = {12} sm={6}>
                    <Stack gap = {4}>
                        <Typography variant = "h3">Enquiries</Typography>
                        <Typography color='gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Typography>
                        <Stack gap={2} sx = {{color:'gray'}}>
                            <Stack direction = 'row' gap = {1}>
                                <Icon icon = 'akar-icons:location' color={theme.palette.primary.main}/>
                                <Typography> 49 Grand Street, LA, USA</Typography>
                            </Stack>
                            <Stack direction = 'row' gap = {1}>
                                <Icon icon = 'charm:phone-call' color={theme.palette.primary.main}/>
                                <Typography> (222) 111 222 4444</Typography>
                            </Stack>
                            <Stack direction = 'row' gap = {1}>
                                <Icon icon = 'ci:mail-open' color={theme.palette.primary.main}/>
                                <Typography> info@gmail.com</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}
