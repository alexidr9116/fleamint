import { Icon } from '@iconify/react';
import {IconButton} from '@mui/material';

import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';

IconfyButton.propTypes = {
    icon:PropTypes.string,
    handleEvent:PropTypes.func,
    width:PropTypes.number,
    sx:PropTypes.any
}
export default function IconfyButton({ icon, handleEvent, width = 20, sx }) {
    const theme = useTheme();
    const clickEvent = (e)=>{
        if(handleEvent){
            handleEvent(e)
        }
    }
    return (
        <IconButton onClick = {clickEvent} sx={{ background: theme.palette.primary.main, '&:hover': { background: theme.palette.primary.dark }, ...sx}}>
            <Icon icon={icon} width={width} color={'white'} />
        </IconButton>
    )
}