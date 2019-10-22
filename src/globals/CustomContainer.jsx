import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      }
    },
}));

const CustomContainer = props => {
    const classes = useStyles();
    const { children, ...rest} = props
    return (
        <Container className={classes.root} {...rest}>
            {children}
        </Container>
    )
}

CustomContainer.propTypes = {
    children: PropTypes.element.isRequired
}

export default CustomContainer
