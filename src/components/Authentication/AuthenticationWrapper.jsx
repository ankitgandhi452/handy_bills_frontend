import Box from '@material-ui/core/Box';
import SigninForm from 'components/Authentication/components/SigninForm';
import SignupForm from 'components/Authentication/components/SignupForm';
import CustomLoader from 'globals/CustomLoader';
import Layout from 'globals/Layout';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class AuthenticationWrapper extends Component {
    static propTypes = {
        signupSubmit: PropTypes.func.isRequired,
        signinSubmit: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired,
        formType: PropTypes.string.isRequired,
        user: PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            data: PropTypes.object.isRequired,
            errors: PropTypes.object.isRequired
        }),
    }

    renderForm = (formType) => {
        switch (formType) {
            case "login": 
                return <SigninForm signinSubmit={this.props.signinSubmit} navigateTo={this.props.navigateTo} />
            case "register": 
                return <SignupForm signupSubmit={this.props.signupSubmit} navigateTo={this.props.navigateTo} />
            default:
                return <SigninForm signinSubmit={this.props.signinSubmit} navigateTo={this.props.navigateTo} />
        }
    }

    render() {
        return (
            <Layout boxShadow={0} bgColor="none" >
                <CustomLoader loading={this.props.user.loading} />
                <Box pt={5} display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" overflow="auto" p={2} >
                    {this.renderForm(this.props.formType)}
                </Box>
            </Layout>
        )
    }
}
