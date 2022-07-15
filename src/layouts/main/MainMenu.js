import { Button, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import { MenuRoutes } from "../../_mock/MenuItems";
import Iconify from "../../components/Iconify";
import useResponsive from "../../hooks/useResponsive";


const MenuAction = styled('a')(({theme}) => ({
    cursor:'pointer',
    display:'flex',
    alignItems:'center',
    "&:hover":{borderBottom:`1px solid ${theme.palette.primary.main}`}
}))
export default function MainMenu() {
    const isMobile = useResponsive('down', 'md');

    return (
        <Stack direction='row' gap={2} alignItems="center" >
            {!isMobile && MenuRoutes.map((menu, index) => (
                <MenuAction key={index}>
                    {menu.title}
                    {menu.elements &&
                    <Iconify icon={"bx:chevron-down"} />
                     }
                </MenuAction>
                
            ))}
            <Button variant="contained" sx = {{paddingX:4}}>Wallet</Button>
            {isMobile &&
            <IconButton>
                <Icon icon = 'dashicons:menu-alt' />
            </IconButton>
            }

        </Stack>
    )
}