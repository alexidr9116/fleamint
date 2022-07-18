import { Box, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';

import Page from "../../components/Page";
import StayInLoop from "../../sections/StayInLoop";
import { GradientStyle } from '../Home';


export default function HelpCenter() {
    const theme = useTheme();

    return (
        <Page title="Help Center">
            <GradientStyle sx={{ paddingTop: {xs:15, sm:20}, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container >
                    <Box xs={{ display: 'relative' }}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography variant={'h3'} component = {'p'}>
                                        Discover, Collect, And Sell <font color = {theme.palette.primary.dark}>NFTs</font>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </GradientStyle>
            {/* Stay in loop start */}
            <StayInLoop />

        </Page>
    )
}