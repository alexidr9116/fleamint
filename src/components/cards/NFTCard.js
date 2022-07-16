import { Stack, Typography, Grid, Box, Divider, TextField, useTheme, Button } from "@mui/material";
import PropTypes from 'prop-types';

import Image from "../Image";

NFTCard.propTypes={
    collection:PropTypes.object,
    theme:PropTypes.object,
}
export default function NFTCard({collection, theme}){
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}  mb={4}>
            <Stack gap={2} px={1} >
                <Box sx={{ borderRound: 1 }}>
                    <Image src={collection.image} alt='' />
                </Box>
                <Stack direction='row' justifyContent={'space-between'} sx={{ width: '100%' }}>
                    <Typography variant="h5">{collection.name}</Typography>
                    <Typography color='gray'>{collection.stock} in Stock</Typography>
                </Stack>
                <Divider color='black' />
                <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        label='Current Bid' defaultValue={"1,000 FLM"} sx={{

                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: theme.palette.primary.main },
                            },
                            "& .MuiOutlinedInput-root:hover": {
                                "& > fieldset": { borderColor: theme.palette.primary.main },
                            },
                            width: '8rem'
                        }} />
                    <Typography color='gray'>{collection.time}</Typography>
                </Stack>
            </Stack>
        </Grid>
    )
}