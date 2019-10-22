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
        loadingText: PropTypes.string
    }

    static defaultProps = {
        loadingText: "Loading..."
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

    render() {
        const { showLoading } = this.state;
        const { loadingText } = this.props;

        return (
            <Slide direction="up" in={showLoading} mountOnEnter unmountOnExit>
                <Box
                    height="100%"
                    width="100%"
                    bgcolor="primary.dark"
                    position="absolute"
                    top="0"
                    left="0"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    style={{opacity: 0.7}}
                >
                    <Box display="flex">
                        <CircularProgress color="secondary" />
                    </Box>
                    <Box display="flex" p="1rem" >
                        <Box p="1rem" >
                            <Typography variant="h4" color="textSecondary">
                                {loadingText}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Slide>
        )
    }
}
