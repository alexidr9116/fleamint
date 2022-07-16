import { Stack, Container, Typography, Grid, Box, Divider, TextField, useTheme, Button } from "@mui/material";
import { useState } from "react";
import StayInLoop from "../../StayInLoop";
import CustomButton from "../../../components/CustomButton";
import Image from "../../../components/Image";
import { BlankLink } from "../../../components/StyledComponents";
import { CollectionsData, CollectionsCategories } from "../../../_mock/MockData";

export default function BrowserCollection() {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleCategory = (index) => {
        setSelectedIndex(index);
    }
    return (
        <Container>
            {/* start categories */}
            <Stack alignItems={'center'} gap={2} mb={4}>
                <Typography variant="h3">Browser By Collections</Typography>
                <Typography color="gray">Discoverthe most outstanding NFTs in all topics of life</Typography>
                <Stack direction="row" gap={2} justifyContent="space-between" flexWrap={'wrap'}>
                    {CollectionsCategories.map((collection, index) => (
                        <BlankLink selected={index === selectedIndex} key={index} onClick={() => handleCategory(index)}>{collection.title}</BlankLink>
                    ))}
                </Stack>
            </Stack>
            {/* end categories */}
            {/* Show Collections */}
            <Grid container mb={4}>
                {CollectionsData.map((collection, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index} mb={4}>
                        <Stack gap={2} px={1} >
                            <Box sx={{ borderRound: 1 }}>
                                <Image src={collection.image} alt='' />
                            </Box>
                            <Stack direction='row' justifyContent={'space-between'} sx={{ width: '100%' }}>
                                <Typography variant="h5">{collection.name}</Typography>
                                <Typography color='gray'>{collection.stock} in Stock</Typography>
                            </Stack>
                            <Divider color='black' />
                            <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                                <TextField
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    label='Current Bid' defaultValue={"1,000 FLM"} sx={{

                                        "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: theme.palette.primary.main },
                                        },
                                        "& .MuiOutlinedInput-root:hover": {
                                            "& > fieldset": { borderColor: theme.palette.primary.main },
                                        },
                                        width: '8rem'
                                    }} />
                                <Typography color='gray'>{collection.time}</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
            {/* end collections */}
            <Stack alignItems={'center'}>
                <Button sx={{px:{xs:4, sm:8}}}>Load More..</Button>
            </Stack>
            {/* Stay in loop start */}
            <StayInLoop />
        </Container>
    )
}
