import { styled } from '@mui/material/styles';

export const IconifyLink = styled('a')(({ theme }) => (
    {
        textDecoration: 'none',
        cursor: "pointer",
        color: theme.palette.primary.main,
    }
));

export const BlankLink = styled('a')(({ theme, selected }) => (
    {
        textDecoration: selected ? 'underline' : 'none',
        cursor: "pointer",
        color: selected ? theme.palette.primary.main : 'black',
    }
));

export const BackgroundImageStyle = styled('div')(({ theme, sx }) => (
    {
        ...sx,
        display: 'flex',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    }
));

export const ToggoleButton = styled('div')(({ theme, selected }) => (
    {
        padding: '10px 0',
        textAlign:'center',
        borderRadius: '6px',
        width: '100%',
        background: selected ? theme.palette.primary.main : '#F1F1F1',
        cursor: "pointer",
        color: !selected ? 'black' : 'white',
        boxShadow: '0px 12px 26px rgb(16 30 115 / 6%)',

    }
));

export const SelectStyle = styled('select')(({ theme, }) => (
    {
        outline: 'none',
        border: '1px solid #E5E5E5',
        borderRadius: '6px',
        padding: '12px',
        fontSize: '16px',
        fontWeight: 400,
        color: '#868686',
    }
));