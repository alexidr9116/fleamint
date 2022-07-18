import { Box, Container, Grid, } from '@mui/material';
import { useEffect } from 'react';

import RealTable from '../../sections/analystic/RealTable';
// components
import Page from '../../components/Page';
import { GradientStyle } from '../Home';
import AvgSessionChart from '../../sections/analystic/AvgSestionChart';
import Top5CountriesChart from '../../sections/analystic/Top5CountiresChart';
import WorldMapSVG from '../../sections/analystic/WorldMapSVG';


export default function Analystics() {
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <GradientStyle sx={{ paddingTop: 20, display: 'flex', gap: 8, flexDirection: 'column' }} >
                    <Container>
                        <RealTable />
                        <AvgSessionChart />
                        <Grid container>
                            <Grid item  xs ={12} sm={12} md={6} sx  ={{paddingRight:2}}>
                                <WorldMapSVG />
                            </Grid>
                            <Grid item  xs ={12} sm={12} md={6} sx  ={{paddingLeft:2}}>
                                <Top5CountriesChart />
                            </Grid>
                        </Grid>
                    </Container>
                </GradientStyle>
            </Box>
        </Page>
    )
}