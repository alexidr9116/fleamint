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

export const SearchBar = styled('div')(({ theme,sx }) => ({
   
    borderRadius: 8,
    display: 'flex',
    justifyContent:'space-between',
    
    "& input": {
        border: `1px solid ${theme.palette.primary.dark}`,
        borderRight:0,
        width: '100%',
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
    },
    ...sx,
}));

export const RootStyle = styled('div')(({ theme, sx }) => ({
    background: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',

    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    ...sx,
    width: '100%',
}));
