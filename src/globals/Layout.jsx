import { Box } from '@material-ui/core';
import CustomContainer from 'globals/CustomContainer';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Layout extends Component {

    static propTypes = {
        boxShadow: PropTypes.number
    }

    static defaultProps = {
        boxShadow: 3,
        bgColor: "background.default"
    }
    
    render() {
        return (
            <Box height="100%" width="100%" bgcolor="grey.700">
                <CustomContainer maxWidth="md">
                    <Box height="100vh">
                        <Box width="100%" boxShadow={this.props.boxShadow} height="100%" bgcolor={this.props.bgColor}>
                            {this.props.children}
                        </Box>
                    </Box>
                </CustomContainer>
            </Box>
        )
    }
}
