import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
}));

const CustomFlatButton = props => {
    const classes = useStyles();
    const { children, color, variant, ...rest} = props
    return (
        <Button size="large" color={props.primary} className={classes.root} {...rest} >
            {children}
        </Button>
    )
}

CustomFlatButton.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string
}

CustomFlatButton.defaultProps = {
    color: "primary"
}

export default CustomFlatButton
