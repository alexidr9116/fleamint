import { Stack, Container, Typography, Grid, Box, Divider, TextField, useTheme, Button } from "@mui/material";
import { useState } from "react";
import StayInLoop from "../../StayInLoop";
import CustomButton from "../../../components/CustomButton";
import Image from "../../../components/Image";
import { BlankLink } from "../../../components/StyledComponents";
import { CollectionsData, CollectionsCategories } from "../../../_mock/MockData";
import NFTCard from "../../../components/cards/NFTCard";

export default function BrowserCollection() {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [filtered,setFiltered] = useState(CollectionsData);
    const handleCategory = (index,collection) => {
        setSelectedIndex(index);
        const _filterd = CollectionsData.slice(0,CollectionsData.length);
        setFiltered(_filterd.filter((f)=>f.category === collection.id));
    }
    return (
        <Container>
            {/* start categories */}
            <Stack alignItems={'center'} gap={2} mb={4}>
                <Typography variant="h3">Browser By Collections</Typography>
                <Typography color="gray">Discoverthe most outstanding NFTs in all topics of life</Typography>
                <Stack direction="row" gap={2} justifyContent="space-between" flexWrap={'wrap'}>
                    {CollectionsCategories.map((collection, index) => (
                        <BlankLink selected={index === selectedIndex} key={index} onClick={() => handleCategory(index,collection)}>{collection.title}</BlankLink>
                    ))}
                </Stack>
            </Stack>
            {/* end categories */}
            {/* Show Collections */}
            <Grid container mb={4}>
                {filtered.map((collection, index) => (
                    <NFTCard collection = {collection} key = {index} theme = {theme}/>
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
