import { Icon } from "@iconify/react";
import { styled, } from '@mui/material/styles';
import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "../components/Image";

const SearchBar = styled('div')(({ theme }) => ({
   
    borderRadius: 8,
    display: 'flex',
    justifyContent:'space-between',
    
    "& input": {
        border: `1px solid ${theme.palette.primary.dark}`,
        borderRight:0,
        width: '300px',
        borderRadius:'8px 0px 0px 8px',
        paddingLeft:'10px', 
        "&:focus, &:active":{
            outline:'none',
        }
    },
    "& button": {
        backgroundColor: theme.palette.primary.dark,
        border:`1px solid ${theme.palette.primary.dark}`,
        borderRadius:'0 8px 8px 0',
        color:'white',
        cursor:'pointer',
        "&:hover":{
            color:theme.palette.primary.dark,
            backgroundColor: 'transparent',
        },
        transition: 'all 0.4s ease-in-out',
    }
}));

export default function StayInLoop() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={6} >
                    <Stack gap={2} justifyContent="center" sx = {{height:'100%'}}>
                        <Typography variant="h3">Stay In The Loop</Typography>
                        <Typography color='gray'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating FELAMENT</Typography>
                        <Stack direction='row'>
                            <SearchBar>
                                <input type='text' placeholder="Email"  />
                                <button type='button'>
                                    <Icon icon="bi:arrow-right-short" width={40} />
                                </button>
                            </SearchBar>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} sx ={{padding:{xs:4, md:8, lg:12}}}>
                    <Stack gap={2}>
                        <Image alt ='' src = './assets/images/newlater.png'/>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}