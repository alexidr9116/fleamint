import { Icon } from '@iconify/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Divider, Grid, Stack, Typography, useTheme } from '@mui/material';
import SelectInput from '@mui/material/Select/SelectInput';
import { useEffect, useState } from 'react';
import { SelectStyle } from '../../components/StyledComponents';
import Image from '../../components/Image';

import Page from "../../components/Page";
import StayInLoop from "../../sections/StayInLoop";
import { CardStyle, GradientStyle } from '../Home';

const HELP_CATEGORIES = [
    { name: 'Getting Start', icon: 'lucide:align-vertical-justify-start' },
    { name: 'Buying', icon: 'bi:credit-card-2-front' },
    { name: 'Selling', icon: 'la:sellsy' },
    { name: 'Creating', icon: 'akar-icons:folder-add' },
    { name: 'FAQ', icon: 'arcticons:note-it' },
    { name: 'User Friendly', icon: 'ph:users-three-bold' },
    { name: 'Partner', icon: 'carbon:partnership' },
    { name: 'Developer', icon: 'bx:code-block' },
];

const HEL_ACCORDION = [
    { pannel: 'pannel1', title: 'How Do I Create An Account Here', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
    { pannel: 'pannel2', title: 'How Do I Create An Account Here', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
    { pannel: 'pannel3', title: 'How Do I Create An Account Here', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
]
export default function HelpCenter() {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Page title="Help Center">
            <GradientStyle sx={{ paddingTop: { xs: 15, sm: 20 }, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container >
                    <Box sx={{ position: 'relative' }}>
                        
                        <Box sx = {{position:'absolute', width:'100%', marginTop:30,zIndex:50}}>
                            <Stack direction="row">
                                <Stack flexGrow={1} sx={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8, background: 'white' }} direction="row" gap={1} alignItems={'center'} justifyContent={'center'} padding={2}>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: 2 }}>

                                            <SelectStyle sx={{ border: 'none', borderRadius: 0, flexGrow: 1 }}>
                                                <option>Search NFTs</option>
                                            </SelectStyle>
                                            <Divider orientation='vertical' variant="middle" flexItem />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: 2 }}>
                                            <SelectStyle sx={{ border: 'none', borderRadius: 0, flexGrow: 1 }}>
                                                <option>Item Type</option>
                                            </SelectStyle>
                                            <Divider display={{ sm: 'none', md: 'block' }} orientation='vertical' variant="middle" flexItem />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: 2 }}>
                                            <SelectStyle sx={{ border: 'none', borderRadius: 0, flexGrow: 1 }}>
                                                <option>Sale Type</option>
                                            </SelectStyle>
                                            <Divider display={{ sm: 'none', md: 'block' }} orientation='vertical' variant="middle" flexItem />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: 2 }}>
                                            <SelectStyle sx={{ border: 'none', borderRadius: 0, flexGrow: 1 }}>
                                                <option>Price Range</option>
                                            </SelectStyle>
                                            <Divider display={{ sm: 'none', md: 'block' }} orientation='vertical' variant="middle" flexItem />
                                        </Grid>
                                    </Grid>

                                </Stack>
                                <Button color='error' sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} variant="contained">
                                    <Icon icon="eva:search-fill" width={30} />
                                </Button>
                            </Stack>
                        </Box>
                        {/* hero */}
                        <Grid container sx={{ mb: { xs: 4, md: 8 } }}>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography variant={'h3'} component={'p'}>
                                        Discover, Collect, And Sell <font color={theme.palette.primary.dark}>NFTs</font>

                                    </Typography>
                                    <Typography color="gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation

                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box paddingX={{ xs: 2, sm: 4 }}>
                                    <Image src="/assets/images/image 143.png" alt="" />
                                </Box>
                            </Grid>

                        </Grid>
                        
                        {/* Card list */}
                        <Grid container sx={{ mb: { xs: 4, md: 8 } }}>
                            {HELP_CATEGORIES.map((category, index) => (

                                <Grid item xs={12} sm={6} md={3} key={index} sx={{ padding: 2 }}>
                                    <CardStyle sx={{ width: '100%', padding: 2, paddingY: 4, flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center', ":hover": { color: theme.palette.primary.dark } }} >
                                        <Icon icon={category.icon} width={60} />
                                        <Typography variant="h6" fontWeight={400} >{category.name}</Typography>
                                    </CardStyle>
                                </Grid>
                            ))}

                        </Grid>
                        {/* Accodion list */}
                        <Stack alignItems={'center'}>
                            <Typography variant="h3" sx={{ mb: 4 }}>Recommended Reads</Typography>
                            {HEL_ACCORDION.map((accordion, index) => (
                                <Accordion key={index} expanded={expanded === accordion.pannel} onChange={handleChange(accordion.pannel)}>
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography variant="h6" color={(accordion.pannel === expanded) ? theme.palette.primary.dark : theme.palette.text.primary} >
                                            {accordion.title}
                                        </Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color="gray">
                                            {accordion.content}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}

                        </Stack>
                    </Box>
                </Container>
            </GradientStyle>
            {/* Stay in loop start */}
            <StayInLoop />

        </Page>
    )
}