// @mui
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import IconButton from '../../components/IconButton';
import { purplePreset } from '../../utils/getColorPresets';

export default function MemberShip() {
    const theme = useTheme();

    return (
        <Container >
            <Box sx={{ background: purplePreset.lighter, borderRadius: 1, padding: { xs: 2, sm: 4 } }}>
                <Stack direction='column' gap={4}>
                    <Box textAlign={'center'} padding={2}>
                        <Typography color={theme.palette.primary.dark} variant="h3">Membership</Typography>
                        <Typography variant="h3">Community Tiering & Staking <br/> Bands</Typography>
                        
                    </Box>
                </Stack>
            </Box>
        </Container>

    )
}