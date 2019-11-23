import { register } from 'components/Authentication/Authentication.action';
import AuthenticationWrapper from 'components/Authentication/AuthenticationWrapper';
import { formatErrorCaseForForms, setFormikErrors } from 'helpers/global';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';


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
    }

    signupSubmit = (values, actions) => {
        console.log(actions);
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

    render() {
        return (
            <AuthenticationWrapper
                signupSubmit={this.signupSubmit}
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
            }
        }
    }
)

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer))
