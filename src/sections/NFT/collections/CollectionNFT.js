import { Button, Container, Grid, Select, Stack, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";

import { SearchBar, SelectStyle, ToggoleButton } from "../../../components/StyledComponents";
import NFTCard from "../../../components/cards/NFTCard";
import { CollectionsData } from "../../../_mock/MockData";


export default function CollectionNFTs() {
    const theme = useTheme();
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={8} lg={8} display="flex" alignItems={'center'}>
                    <Stack direction = "row" sx ={{paddingLeft:2}} gap={2} flexWrap={'wrap'} justifyContent={'center'}>
                        <SelectStyle>
                            <option>Price Range</option>
                        </SelectStyle>
                        <SelectStyle>
                            <option>Sales Type</option>
                        </SelectStyle>
                        <SelectStyle>
                            <option>File Type</option>
                        </SelectStyle>
                        <SelectStyle>
                            <option>Sort Order</option>
                        </SelectStyle>
                        <SelectStyle>
                            <option>Verified Creator</option>
                        </SelectStyle>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{ padding: 2 }}>
                    <Stack alignItems={'end'} sx ={{width:'100%'}}>
                        <SearchBar sx = {{height:44, width:{lg:320, md:280,}}}>
                            <input type='text' placeholder="Search Text" />
                            <button type='button'>
                                <Icon icon="eva:search-fill" width={20} />
                            </button>
                        </SearchBar>
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
                <Button sx={{ px: { xs: 4, sm: 8 } }}>Load More..</Button>
            </Stack>

        </Container>
    )
}