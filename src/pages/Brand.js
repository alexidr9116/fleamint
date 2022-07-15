// @mui
import { Box,   } from '@mui/material';
 
 
// components
import Page from '../components/Page';
 
import BrandShow from '../sections/brand/BrandShow';


// sections


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------


export default function Brand() {
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <BrandShow />
                 
            </Box>
        </Page>
    );
}
