import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, Divider, MenuItem, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 4 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.primary.main,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const WALLET_LIST = [
    { name: 'Avax', image: '/assets/images/image 178.png', popular: true },
    { name: 'Avalanche Web Wallet', image: '/assets/images/image 179.png', popular: false },
    { name: 'Metamask', image: '/assets/images/metamask-alternative 1.png', popular: false },
    { name: 'Coinbase Wallet', image: '/assets/images/metamask-alternative 2.png', popular: false },
    { name: 'Wallet Connect', image: '/assets/images/metamask-alternative 3.png', popular: false },
    { name: 'Phantom', image: '/assets/images/Vector (3).png', popular: false },
    { name: 'Glow', image: '/assets/images/Vector (4).png', popular: false },
]
export default function ConnectWallet({ open, handleClose }) {

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Stack justifyContent="center" alignItems="center" gap={2}>
                        <Typography variant="h4">Connect Your Wallet To Sigin</Typography>
                        <Typography color="gray">connect with one of our available wallet providers <br/> or create a new one</Typography>
                    </Stack>
                </BootstrapDialogTitle>
                <DialogContent dividers sx={{ display: 'flex', padding: 2, }}>
                    <Box sx={{ border: '1px solid gray', borderRadius: 2, padding: 2, width: '100%', height: '100%' }}>
                        {WALLET_LIST.map((wallet, index) => (
                            <React.Fragment key={index} >
                                <MenuItem sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'space-between', px: 2 }}>

                                    <Stack direction="row" alignItems={'center'} gap={2} >
                                        <img src={wallet.image} alt='' height="30px" />
                                        <Typography>{wallet.name}</Typography>
                                    </Stack>
                                    {wallet.popular &&
                                        <Chip color="warning" label = "Popular" />
                                    }
                                </MenuItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                        <MenuItem sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', px: 2 }}>
                            <Button >Show More Option</Button>
                             
                        </MenuItem>
                    </Box>
                </DialogContent>

            </BootstrapDialog>
        </div>
    );
}