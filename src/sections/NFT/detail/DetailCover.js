import { Avatar, Box, Button, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography, useTheme } from "@mui/material";


export default function DetailCover() {
    const theme = useTheme();
    return (

        <Grid container sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6}>
                <Stack gap={2} sx={{ padding: 2, paddingRight: { xs: 2, md: 4 } }}>
                    <img width="100%" src='/assets/images/image 129.png' alt='' />
                    <Typography variant={'h4'}>
                        Descriptions
                    </Typography>
                    <Typography color='gray'>
                        Tattooed Kitty Gang (“TKG”) is a collection of 666 badass kitty gangsters, with symbol of tattoos, living in the Proud Kitty Gang (“PKG”) metaverse. Each TKG is an 1/1 ID as gangster member & all the joint rights.
                    </Typography>
                    <Typography variant={'h4'}>
                        Detail
                    </Typography>
                    <Typography >
                        2000X2000 px.IMAGE(685KB)
                    </Typography>
                    <Typography variant={'h6'}>Contaract Address</Typography>
                    <Typography color='gray'>
                        0x1123455678990123495
                    </Typography>
                    <Typography variant={'h6'}>Token ID</Typography>
                    <Typography color='gray'>
                        12341223213241
                    </Typography>
                </Stack>

            </Grid>
            <Grid item xs={12} sm={6}>

                <Stack sx={{ padding: 2, }} gap={2}>
                    {/* Avatar */}
                    <Typography variant={'h4'}>
                        BearX #3636
                    </Typography>
                    <Stack direction='row'>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ height: 56, width: 56 }}>
                                    <img src='/assets/images/author.png' alt='' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Creator" secondary="John Doe" sx={{ pl: 2 }} />
                        </ListItem>
                        <Divider variant="middle" flexItem orientation="vertical" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ height: 56, width: 56 }}>
                                    <img src='/assets/images/image 130.png' alt='' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Collection" secondary="The Bear App" sx={{ pl: 2 }} />
                        </ListItem>
                    </Stack>
                    <Divider variant="middle" flexItem />
                    {/* Aucition Ending */}
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>Auction Ending</Typography>
                    <Stack direction='row' gap={1}>
                        <Box borderRadius={1} border="1px solid black" sx={{ textAlign: 'center', width: 76 }} padding={1}>
                            <Typography variant={'h6'}>11</Typography>
                            <Divider />
                            <Typography variant={'caption'} color='gray'>Days</Typography>
                        </Box>
                        <Box borderRadius={1} border="1px solid black" sx={{ textAlign: 'center', width: 76 }} padding={1}>
                            <Typography variant={'h6'}>21</Typography>
                            <Divider />
                            <Typography variant={'caption'} color='gray'>Hours</Typography>
                        </Box>
                        <Box borderRadius={1} border="1px solid black" sx={{ textAlign: 'center', width: 76 }} padding={1}>
                            <Typography variant={'h6'}>50</Typography>
                            <Divider />
                            <Typography variant={'caption'} color='gray'>Minutes</Typography>
                        </Box>
                        <Box borderRadius={1} border="1px solid black" sx={{ textAlign: 'center', width: 76 }} padding={1}>
                            <Typography variant={'h6'}>16</Typography>
                            <Divider />
                            <Typography variant={'caption'} color='gray'>Seconds</Typography>
                        </Box>
                    </Stack>
                    <Divider variant="middle" flexItem />
                    <Stack direction='row' gap={1} justifyContent='space-between' alignItems={'end'}>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            label='Current Bid' defaultValue={"1,000 FLM"} sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": { borderColor: theme.palette.primary.dark },
                                },
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": { borderColor: theme.palette.primary.dark },
                                },
                            }} />
                        <Typography color='gray'> 56 in Stock</Typography>
                    </Stack>
                    <Stack direction='row' gap={1} justifyContent='space-between' alignItems={'end'}>
                        <Button size="large" color='error' variant='contained' fullWidth>Place Bid</Button>
                        <Button size="large" color='error' variant="outlined" fullWidth>Make Offer</Button>
                    </Stack>
                    <Divider variant="middle" flexItem sx={{ mb: 4 }} />
                    <Typography variant="h6" >
                        <u>Bid History</u>
                    </Typography>
                    {/* bid history */}
                    <Stack gap={1}>
                        <Stack direction="row" justifyContent={'space-between'} alignItems='center'>
                            <Stack gap={1} direction='row' alignItems='center' justifyContent={'center'}>
                                <Avatar sx={{ width: 48, height: 48 }}>
                                    <img src='/assets/images/image 132.png' alt='' />
                                </Avatar>
                                <Typography color="gray">
                                    Placed a bid $1500 by
                                </Typography>
                                <Typography >
                                    <b>John Doe</b>
                                </Typography>
                            </Stack>
                            <Typography color='gray'>Jun 14 - 4:12 PM</Typography>
                        </Stack>
                        <Divider variant="fullWidth" flexItem />
                        <Stack direction="row" justifyContent={'space-between'} alignItems='center'>
                            <Stack gap={1} direction='row' alignItems='center' justifyContent={'center'}>
                                <Avatar sx={{ width: 48, height: 48 }}>
                                    <img src='/assets/images/image 133.png' alt='' />
                                </Avatar>
                                <Typography color="gray">
                                    Placed a bid $1500 by
                                </Typography>
                                <Typography >
                                    <b>John Doe</b>
                                </Typography>
                            </Stack>
                            <Typography color='gray'>Jun 14 - 4:12 PM</Typography>
                        </Stack>
                        <Divider variant="fullWidth" flexItem />
                        <Stack direction="row" justifyContent={'space-between'} alignItems='center'>
                            <Stack gap={1} direction='row' alignItems='center' justifyContent={'center'}>
                                <Avatar sx={{ width: 48, height: 48 }}>
                                    <img src='/assets/images/image 134.png' alt='' />
                                </Avatar>
                                <Typography color="gray">
                                    Placed a bid $1500 by
                                </Typography>
                                <Typography >
                                    <b>John Doe</b>
                                </Typography>
                            </Stack>
                            <Typography color='gray'>Jun 14 - 4:12 PM</Typography>
                        </Stack>
                        <Divider variant="fullWidth" flexItem />
                        <Stack direction="row" justifyContent={'space-between'} alignItems='center'>
                            <Stack gap={1} direction='row' alignItems='center' justifyContent={'center'}>
                                <Avatar sx={{ width: 48, height: 48 }}>
                                    <img src='/assets/images/image 135.png' alt='' />
                                </Avatar>
                                <Typography color="gray">
                                    Placed a bid $1500 by
                                </Typography>
                                <Typography >
                                    <b>John Doe</b>
                                </Typography>
                            </Stack>
                            <Typography color='gray'>Jun 14 - 4:12 PM</Typography>
                        </Stack>
                    </Stack>
                </Stack>


            </Grid>
        </Grid>


    )
}