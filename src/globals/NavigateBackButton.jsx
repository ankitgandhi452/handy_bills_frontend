import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    backButton: {
        margin: theme.spacing(0, 2, 0, 0)
    }
}));

const NavigateBackButton = props => {
    const classes = useStyles();
    let history = useHistory();

    const goBack = () => {
        if (props.goBack && typeof props.goBack === 'function') {
            props.goBack()
        } else {
            history.goBack()
        }
    }

    return (
        <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            aria-label="back"
            onClick={goBack}
        >
            <ArrowBackRoundedIcon />
        </IconButton>
    )
}

NavigateBackButton.propTypes = {
    goBack: PropTypes.func
}

export default NavigateBackButton
