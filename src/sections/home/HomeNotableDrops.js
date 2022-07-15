import { Button, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";

export default function HomeNotableDrops() {
    const theme = useTheme();
    return (
        <Box gap={2} padding={{xs:2,sm:4, md:8}}>
            <Box justifyContent={'space-between'} display='flex' alignItems={'center'}>
                <Typography variant="h3">Notable Drops</Typography>
                <Typography variant="h5" sx={{ cursor: "pointer" }}>- View All</Typography>
            </Box>
            {/* carousel */}
            <Box>
                Carousel
            </Box>
            
        </Box>
    )
}