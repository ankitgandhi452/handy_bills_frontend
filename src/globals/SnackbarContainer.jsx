import Button from '@material-ui/core/Button';
import { amber, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { SnackbarProvider } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';


const useStyles1 = makeStyles(theme => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.main,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
}));
  

const SnackbarContainer = props => {
    const classes = useStyles1();
    const notistackRef = React.createRef();

    const onClickDismiss = key => () => { 
        notistackRef.current.closeSnackbar(key);
    }
        
    return (
        <SnackbarProvider
            ref={notistackRef}
            maxSnack={props.maxSnack}
            anchorOrigin={props.anchorOrigin}
            dense={props.dense}
            preventDuplicate={props.preventDuplicate}
            action={(key) => (
                <Button onClick={onClickDismiss(key)}>
                    <CloseIcon />
                </Button>
            )}
            autoHideDuration={props.autoHideDuration}
            classes={{
                variantSuccess: classes.success,
                variantError: classes.error,
                variantWarning: classes.warning,
                variantInfo: classes.info,
            }}
        >
            {props.children}
        </SnackbarProvider>
    )

}

SnackbarContainer.prototype = {
    children: PropTypes.element.isRequired,
    maxSnack: PropTypes.number,
    anchorOrigin: PropTypes.object,
    dense: PropTypes.bool,
    preventDuplicate: PropTypes.bool,
    autoHideDuration: PropTypes.number
}

SnackbarContainer.defaultPrototype = {
    maxSnack: 3,
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
    },
    dense: true,
    preventDuplicate: true,
    autoHideDuration: 2000
}

export default SnackbarContainer;
