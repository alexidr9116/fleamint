import { Button, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { MenuRoutes } from "../../_mock/MenuItems"; 
import useResponsive from "../../hooks/useResponsive"; 
import DropdownMenu from "../../components/DropdownMenu";
import MobileDrawer from "./MobileDrawer";
import ConnectWallet from "../../pages/ConnectWallet";

const MenuAction = styled('div')(({ theme }) => ({

    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    "&:hover": { borderBottom: `1px solid ${theme.palette.primary.main}` }
}))

export default function MainMenu() {
    const isMobile = useResponsive('down', 'md');
    const [open, setOpen] = useState(false)
    const [openWallet, setOpenWallet] = useState(false);
    const handleCloseWallet = () => {
        setOpenWallet(false);
    }
    const openDrawer = () => {
        setOpen(true);

    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Stack direction='row' gap={2} alignItems="center" >
            {!isMobile && MenuRoutes.map((menu, index) => (
                <DropdownMenu key={index} menu={menu} />
            ))}
            <Button variant="contained" sx={{ paddingX: 4 }} onClick={() => {
                setOpenWallet(true);
            }}>Wallet</Button>
            {isMobile &&
                <>
                    <IconButton onClick={openDrawer}>
                        <Icon icon='dashicons:menu-alt' />
                    </IconButton>
                    <MobileDrawer open={open} handleClose={handleClose} />
                </>

            }
            <ConnectWallet open={openWallet} handleClose={handleCloseWallet} />
        </Stack>
    )
}