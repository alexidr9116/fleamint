import { Button, Container, Grid, Select, Stack, useTheme } from "@mui/material";
import { SelectStyle, ToggoleButton } from "../../components/StyledComponents";
import NFTCard from "../../components/cards/NFTCard";
import { CollectionsData } from "../../_mock/MockData";
import StayInLoop from "../StayInLoop";

export default function ProfileNFTs() {
    const theme = useTheme();
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <Stack direction={{xs:'column', sm:'row',md:"row",lg:'row'}} justifyContent={'space-between'} gap={2} sx={{padding:2}}>
                        <ToggoleButton selected >Created</ToggoleButton>
                        <ToggoleButton >Collectibles</ToggoleButton>
                        <ToggoleButton >Liked</ToggoleButton>
                        <ToggoleButton >Following</ToggoleButton>
                        <ToggoleButton >Followers</ToggoleButton>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} sx = {{padding:2 }}>
                    <Stack justifyContent={'end'}>
                        <SelectStyle >
                            <option>Most Recent</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                        </SelectStyle>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container mb={4}>
                {CollectionsData.map((collection, index) => (
                    <NFTCard collection={collection} key={index} theme={theme} />
                ))}
            </Grid>
            {/* end collections */}
            <Stack alignItems={'center'}>
                <Button sx={{px:{xs:4, sm:8}}}>Load More..</Button>
            </Stack>
           
        </Container>
    )
}