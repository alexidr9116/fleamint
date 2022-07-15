import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

RouterLink.propTypes = {
    color:PropTypes.string,
    to:PropTypes.string,
    children:PropTypes.any
}
export default function RouterLink({color='black', to, children}){
    return(
        <Link style={{color, textDecoration:'none'}} to = {to}>
            {children}
        </Link>
    )
}