import { Box, Container, } from '@mui/material';
import { useEffect } from 'react';

import RealTable from '../../sections/analystic/RealTable';
// components
import Page from '../../components/Page';
import { GradientStyle } from '../Home';
import AvgSessionChart from '../../sections/analystic/AvgSestionChart';


export default function Analystics() {
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <GradientStyle sx={{ paddingTop: 20, display: 'flex', gap: 8, flexDirection: 'column' }} >
                    <Container>
                        <RealTable />
                        <AvgSessionChart />
                    </Container>
                </GradientStyle>
            </Box>
        </Page>
    )
}