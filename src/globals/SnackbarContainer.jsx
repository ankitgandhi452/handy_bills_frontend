import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { SnackbarProvider } from 'notistack';
import PropTypes from 'prop-types';
import React, { Component } from 'react';



export default class SnackbarContainer extends Component {

    notistackRef = React.createRef();

    static propTypes = {
        children: PropTypes.element.isRequired,
        maxSnack: PropTypes.number,
        anchorOrigin: PropTypes.object,
        dense: PropTypes.bool,
        preventDuplicate: PropTypes.bool,
        autoHideDuration: PropTypes.number
    }

    static defaultProps = {
        
        maxSnack: 3,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        },
        dense: true,
        preventDuplicate: true,
        autoHideDuration: 2000
    }

    onClickDismiss = key => () => { 
        this.notistackRef.current.closeSnackbar(key);
    }

    render() {
        console.log(SnackbarContainer.notistackRef)
        return (
            <SnackbarProvider
                ref={this.notistackRef}
                maxSnack={this.props.maxSnack}
                anchorOrigin={this.props.anchorOrigin}
                dense={this.props.dense}
                preventDuplicate={this.props.preventDuplicate}
                action={(key) => (
                    <Button onClick={this.onClickDismiss(key)}>
                        <CloseIcon />
                    </Button>
                )}
                autoHideDuration={this.props.autoHideDuration}
            >
                {this.props.children}
            </SnackbarProvider>
        )
    }
}
