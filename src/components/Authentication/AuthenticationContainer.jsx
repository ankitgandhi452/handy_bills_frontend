import { forgotPassword, login, register } from 'components/Authentication/Authentication.action';
import AuthenticationWrapper from 'components/Authentication/AuthenticationWrapper';
import { commonSuccessNavigationWithDelay, formatErrorCaseForForms, setFormikErrors, stateSetter } from 'helpers/global';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class AuthenticationContainer extends Component {
    static propTypes = {
        actions: PropTypes.shape({
            register: PropTypes.func.isRequired
        }),
        authentication: PropTypes.object.isRequired,
        user: PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            data: PropTypes.object.isRequired,
            errors: PropTypes.object.isRequired
        }),
        enqueueSnackbar: PropTypes.func.isRequired,
        closeSnackbar: PropTypes.func.isRequired,
        history: PropTypes.object,
        location: PropTypes.object,
        match: PropTypes.object,
    }

    constructor(props) {
        super(props);
        this.state = {
            formType: 'login'
        }
        this.setter = stateSetter(this)
    }

    
    componentDidMount() {
        const formType = this.getFormType();
        this.setter.setState({ formType });
    }

    componentDidUpdate() {
        const formType = this.getFormType();
        const prevFormType = this.state.formType;
        if (formType !== prevFormType) {
            this.setter.setState({ formType });
        }
    }

    componentWillUnmount() {
        this.setter.cancel()
    }

    getFormType = () => (
        this.props.location.pathname.split("/")[1]
    )


    signupSubmit = (values, actions) => {
        this.props.actions.register(values)
            .then(response => {
                this.props.enqueueSnackbar("Success!!", { variant: "success" });
                commonSuccessNavigationWithDelay(this.props.history, '/', 'push')
            })
            .catch(errors => {
                const formattedError = formatErrorCaseForForms(errors);
                console.log("formattedError", formattedError)
                this.props.enqueueSnackbar("Please rectify the errors!!", {variant: "error"});
                setFormikErrors(formattedError, actions);
            })
    }

    signinSubmit = (values, actions) => {
        this.props.actions.login(values)
            .then(response => {
                this.props.enqueueSnackbar("Success!!", { variant: "success" });
                commonSuccessNavigationWithDelay(this.props.history, '/', 'push')
            })
            .catch(errors => {
                const formattedError = formatErrorCaseForForms(errors);
                console.log("formattedError", formattedError)
                this.props.enqueueSnackbar("Please rectify the errors!!", {variant: "error"});
                setFormikErrors(formattedError, actions);
            })
    }

    forgotPasswordSubmit = (values, actions) => {
        this.props.actions.forgotPassword(values)
            .then(response => {
                this.props.enqueueSnackbar("Success!!", { variant: "success" });
                commonSuccessNavigationWithDelay(this.props.history, '/login', 'push', {email: values.email})
            })
            .catch(errors => {
                const formattedError = formatErrorCaseForForms(errors);
                console.log("formattedError", formattedError)
                this.props.enqueueSnackbar("Please rectify the errors!!", {variant: "error"});
                setFormikErrors(formattedError, actions);
            })
    }

    navigateTo = (route, params={}) => {
        this.props.history.push({
            pathname: route,
            state: params
        })
    }

    render() {
        console.log(this.props)
        return (
            <AuthenticationWrapper
                signupSubmit={this.signupSubmit}
                signinSubmit={this.signinSubmit}
                forgotPasswordSubmit={this.forgotPasswordSubmit}
                navigateTo={this.navigateTo}
                navigationState={this.props.location.state || {}}
                formType={this.state.formType}
                user={this.props.user}
            />
        )
    }
}

const mapStateToProps = (state) => (
    {
        authentication: state.authentication,
        user: state.user
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        actions: {
            register: (userData) => {
                return dispatch(
                    register(userData)
                )
            },
            login: (userData) => {
                return dispatch(
                    login(userData)
                )
            },
            forgotPassword: (userData) => {
                return dispatch(
                    forgotPassword(userData)
                )
            }
        }
    }
)

export default withRouter(withSnackbar(connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer)))
