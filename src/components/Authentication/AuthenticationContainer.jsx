import { register } from 'components/Authentication/Authentication.action';
import AuthenticationWrapper from 'components/Authentication/AuthenticationWrapper';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AuthenticationContainer extends Component {
    static propTypes = {
        actions: PropTypes.shape({
            register: PropTypes.func.isRequired
        }),
        authentication: PropTypes.object.isRequired
    }

    signupSubmit = (values, actions) => {
        this.props.actions.register(values);
    }

    render() {
        return (
            <AuthenticationWrapper
                signupSubmit={this.signupSubmit}
            />
        )
    }
}

const mapStateToProps = (state) => (
    {
        authentication: state.authentication
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer)
