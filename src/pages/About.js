// @mui
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
 
// components
import Page from '../components/Page';
import IconButton from '../components/IconButton';
import { GradientStyle } from './Home';
import Introduce from '../sections/about/Introduce';
import MemberShip from '../sections/about/Membership';


// sections


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------


export default function AboutUs() {
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <Introduce />
                <MemberShip />
            </Box>
        </Page>
    );
}
