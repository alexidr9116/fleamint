import { Box } from "@mui/material";
import ProfileCover from "../../sections/profile/ProfileCover";
import Page from "../../components/Page";

export default function Profile(){
    return(
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <ProfileCover />
            </Box>
        </Page>
    )
}