import { Box } from "@mui/material";
import FeaturedNFTs from "../../sections/NFT/categories/Featured";
import Page from "../../components/Page";

export default function NFTCategories() {
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <FeaturedNFTs />
            </Box>
        </Page>
    );
}