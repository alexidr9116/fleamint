import { Button, Container, Grid, Stack, Typography, useTheme } from "@mui/material";

import { CollectionsData } from "../../../_mock/MockData";
import NFTCard from "../../../components/cards/NFTCard";

export default function DetailCollection() {
    const theme = useTheme();
    return (
        <>
            <Typography variant="h4" sx={{ textAlign: 'center', mb:4 }}>
                More From This Collection
            </Typography>
            <Grid container mb={4}>
                {CollectionsData.map((collection, index) => (
                    <NFTCard collection={collection} key={index} theme={theme} />
                ))}

            </Grid>
            <Stack alignItems={'center'}>
                <Button variant="outlined" color="error">View More</Button>
            </Stack>
        </>
    )
}