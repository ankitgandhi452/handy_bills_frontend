import Box from '@material-ui/core/Box';
import SignupForm from 'components/Authentication/components/SignupForm';
import CustomLoader from 'globals/CustomLoader';
import Layout from 'globals/Layout';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class AuthenticationWrapper extends Component {
    static propTypes = {
        signupSubmit: PropTypes.func.isRequired,
        user: PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            data: PropTypes.object.isRequired,
            errors: PropTypes.object.isRequired
        }),
    }

    render() {
        return (
            <Layout boxShadow={0} bgColor="none" >
                <CustomLoader loading={this.props.user.loading} />
                <Box pt={5} display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" overflow="auto" p={2} >
                    <SignupForm
                        signupSubmit={this.props.signupSubmit}
                    />
                </Box>
            </Layout>
        )
    }
}
