import { AppBar, Stack, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { styled,useTheme } from '@mui/material/styles';

import Logo from "../../components/Logo";
import useOffSetTop from '../../hooks/useOffSetTop';
import cssStyles from '../../utils/cssStyles';
import MainMenu from "./MainMenu";


const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    height: 90,
    transition: theme.transitions.create(['height', 'background-color'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
}));

export default function Header() {
    const isOffset = useOffSetTop(90);
    const theme = useTheme();

    return (
        <AppBar sx={{ bgcolor: 'transparent', boxShadow: 'none', color:'black' }}>
            <ToolbarStyle
                disableGutters
                sx={{
                    ...(isOffset && {
                        ...cssStyles(theme).bgBlur(),
                        height: { md: 70 },
                    }),
                }}
            >
                <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Logo />
                    <Stack direction="row">
                        <MainMenu />
                    </Stack>
                </Container>
            </ToolbarStyle>
        </AppBar>
    )
}