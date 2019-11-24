import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { stateSetter } from 'helpers/global';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


export default class CustomLoader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showLoading: this.props.loading
        }
        this.setter = stateSetter(this)
    }
    
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        loadingText: PropTypes.string,
        withTransition: PropTypes.bool
    }

    static defaultProps = {
        loadingText: "Loading...",
        withTransition: true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.loading !== prevState.showLoading) {
            this.setter.setState({
                showLoading: this.props.loading
            })
        }
    }

    componentWillUnmount() {
        this.setter.cancel()
    }

    renderLoadinBox = (loadingText) => (
        <Box
            height="100%"
            width="100%"
            bgcolor="common.white"
            position="absolute"
            top="0"
            left="0"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            style={{ opacity: 0.7 }}
        >
            <Box display="flex">
                <CircularProgress color="primary" />
            </Box>
            <Box display="flex" p="1rem" >
                <Box p="1rem" >
                    <Typography variant="h4" color="primary">
                        {loadingText}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )

    renderLoadingBoxWithTransition = (showLoading, loadingText) => (
        <Slide direction="up" in={showLoading} mountOnEnter unmountOnExit>
            {this.renderLoadinBox(loadingText)}
        </Slide>
    )

    render() {
        const { showLoading } = this.state;
        const { loadingText, withTransition } = this.props;

        return (
            withTransition ? this.renderLoadingBoxWithTransition(showLoading, loadingText) : this.renderLoadinBox(loadingText)
        )
    }
}
