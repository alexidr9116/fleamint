import { Container, Stack, useTheme,Typography, Box } from "@mui/material";

import { CardStyle, GradientStyle } from "../../../pages/Home";

export default function FeaturedNFTs() {

    const theme = useTheme();
    return (
        <GradientStyle sx={{ paddingTop: 15, display: 'flex', gap: 8, flexDirection: 'column' }} >
            <Container>
                <CardStyle sx={{ padding: { xs: 2, md: 4 } }} >
                    <Stack direction={{ xs: 'column', md: 'row', }} alignItems={'center'}>
                        <Typography variant = "h4">
                            Featured NFTs    
                        </Typography>
                        <Box>
                            SLIDER
                        </Box>
                    </Stack>

                </CardStyle>
            </Container>

        </GradientStyle>
    )
}