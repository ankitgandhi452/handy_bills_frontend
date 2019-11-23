import Box from '@material-ui/core/Box';
import SignupForm from 'components/Authentication/components/SignupForm';
import Layout from 'globals/Layout';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class AuthenticationWrapper extends Component {
    static propTypes = {
        signupSubmit: PropTypes.func.isRequired
    }

    render() {
        return (
            <Layout boxShadow={0} bgColor="none" >
                <Box pt={5} display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" overflow="auto" p={2} >
                    <SignupForm
                        signupSubmit={this.props.signupSubmit}
                    />
                </Box>
            </Layout>
        )
    }
}
