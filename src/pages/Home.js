// @mui
import { Box, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeHero from '../sections/home/HomeHero';
// components
import Page from '../components/Page';
import HomeNotableDrops from '../sections/home/HomeNotableDrops';
import HomeAvax from '../sections/home/HomeAvax';
import HomeBrand from '../sections/home/HomeBrand';
// sections


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
export const CardStyle = styled('div')(({ sx }) => ({
  boxShadow: `0px 3px 26px rgb(16 30 115 / 10%)`,
  borderRadius: `10px`,
  display: 'flex',
  justifyContent:'center',
  ...sx,
}));
export const GradientStyle = styled('div')(({ sx }) => ({
  ...sx,

  background: `linear-gradient(rgba(242, 156, 67, 0.26) 0%, rgba(229, 239, 255, 0.263) 83.7%, rgba(229, 239, 255, 0) 100%)`,

}));
export default function HomePage() {
  return (
    <Page title="">
      <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
        <GradientStyle sx={{ paddingTop: 25, display: 'flex', gap: 20, flexDirection: 'column' }} >
          <HomeHero />
          <HomeNotableDrops />
        </GradientStyle>
        <HomeAvax />
        <HomeBrand />
      </Box>
    </Page>
  );
}
