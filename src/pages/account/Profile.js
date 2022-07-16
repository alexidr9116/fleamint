import { Box } from "@mui/material";
import ProfileCover from "../../sections/profile/ProfileCover";
import Page from "../../components/Page";
import ProfileNFTs from "../../sections/profile/ProflieNFTs";
import PopularCreator from "../../sections/profile/PopularCreator";
import StayInLoop from "../../sections/StayInLoop";

export default function Profile() {
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <ProfileCover />
                <ProfileNFTs />
                <PopularCreator />
                {/* Stay in loop start */}
                <StayInLoop />
            </Box>
        </Page>
    )
}