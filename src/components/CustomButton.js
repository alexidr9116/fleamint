import PropTypes from 'prop-types';
import { styled } from "@mui/material";

const CustomButtonStyle = styled('button')(({ theme, sx,size}) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding:12,
    width:(size),
    fontWeight:560,
    fontSize:'1rem',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    "&:hover": {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
    },
    transition: 'all 0.4s ease-in-out',
    ...sx,
}));

CustomButton.propTypes = {
    children:PropTypes.node,
    sx:PropTypes.any,
    size:PropTypes.string
}
export default function CustomButton({sx, size, children}) {
    return(
        <CustomButtonStyle sx =  {sx} size = {size}>{children}</CustomButtonStyle>
    )
}