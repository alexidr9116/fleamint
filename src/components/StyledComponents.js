import {styled} from '@mui/material/styles';

export const IconifyLink = styled('a')(({ theme }) => (
    {
        textDecoration: 'none',
        cursor: "pointer",
        color: theme.palette.primary.main,
    }
));

export const BlankLink = styled('a')(({ theme, selected }) => (
    {
        textDecoration: selected?'underline':'none',
        cursor: "pointer",
        color: selected?theme.palette.primary.main:'black',
    }
));

export const BackgroundImageStyle = styled('div')(({theme, sx})=>(
    {
        ...sx,
        display:'flex',
        width:'100%',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
    }
));