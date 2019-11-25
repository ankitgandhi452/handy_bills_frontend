import { login, register } from 'components/Authentication/Authentication.action';
import AuthenticationWrapper from 'components/Authentication/AuthenticationWrapper';
import { formatErrorCaseForForms, setFormikErrors, stateSetter } from 'helpers/global';
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

    getFormType = () => (
        this.props.location.pathname.split("/")[1]
    )


    signupSubmit = (values, actions) => {
        this.props.actions.register(values)
            .then(response => {
                this.props.enqueueSnackbar("Success!!", {variant: "success"});
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
                this.props.enqueueSnackbar("Success!!", {variant: "success"});
            })
            .catch(errors => {
                const formattedError = formatErrorCaseForForms(errors);
                console.log("formattedError", formattedError)
                this.props.enqueueSnackbar("Please rectify the errors!!", {variant: "error"});
                setFormikErrors(formattedError, actions);
            })
    }

    navigateTo = (route, params={}) => {
        this.props.history.push(route, params)
    }

    render() {
        return (
            <AuthenticationWrapper
                signupSubmit={this.signupSubmit}
                signinSubmit={this.signinSubmit}
                navigateTo={this.navigateTo}
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
            }
        }
    }
)

export default withRouter(withSnackbar(connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer)))
