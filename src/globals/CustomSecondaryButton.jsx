import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
}));

const CustomSecondaryButton = props => {
    const classes = useStyles();
    const { children, color, variant, ...rest} = props
    return (
        <Button size="large" variant="outlined" color="primary" className={classes.root} {...rest} >
            {children}
        </Button>
    )
}

CustomSecondaryButton.propTypes = {
    children: PropTypes.node.isRequired
}

export default CustomSecondaryButton
