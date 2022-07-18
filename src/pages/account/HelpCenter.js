import { Box, Container, Grid, } from '@mui/material';
import { useEffect } from 'react';

import Page from "../../components/Page";
import StayInLoop from "../../sections/StayInLoop";

export default function HelpCenter() {
    return (
        <Page title = "Help Center">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                >
                {/* Stay in loop start */}
                <StayInLoop />
            </Box>
        </Page>
    )
}