import Box from '@material-ui/core/Box';
import ForgotPasswordForm from 'components/Authentication/components/ForgotPasswordForm';
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
        forgotPasswordSubmit: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired,
        formType: PropTypes.string.isRequired,
        navigationState: PropTypes.object.isRequired,
        user: PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            data: PropTypes.object.isRequired,
            errors: PropTypes.object.isRequired
        }),
    }

    renderForm = (formType) => {
        switch (formType) {
            case "login": 
                return <SigninForm
                    signinSubmit={this.props.signinSubmit}
                    navigateTo={this.props.navigateTo}
                    navigationState={this.props.navigationState}
                />
            case "register": 
                return <SignupForm
                    signupSubmit={this.props.signupSubmit}
                    navigateTo={this.props.navigateTo}
                    navigationState={this.props.navigationState}
                />
            case "forgotPassword": 
                return <ForgotPasswordForm
                    forgotPasswordSubmit={this.props.forgotPasswordSubmit}
                    navigateTo={this.props.navigateTo}
                    navigationState={this.props.navigationState}
                />
            default:
                return <SigninForm
                    signinSubmit={this.props.signinSubmit}
                    navigateTo={this.props.navigateTo}
                    navigationState={this.props.navigationState}
                />
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
