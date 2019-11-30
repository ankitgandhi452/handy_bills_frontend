import IconButton from '@material-ui/core/IconButton';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { logout } from 'components/Authentication/Authentication.action';
import { appRoutes } from 'configurations/routing/AppNavigation';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";


const SignOutButton = props => {
    let history = useHistory();
    const logoutUser = () => {
        props.actions.logout();
        history.length = -1;
        history.replace(appRoutes.authentication.login)
    }
    return (
        <IconButton onClick={logoutUser} aria-label="logout" edge="end" color="inherit">
            <ExitToAppRoundedIcon />
        </IconButton>
    )
}

SignOutButton.propTypes = {
    component: PropTypes.element,
    isAuthenticated: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
        logout: PropTypes.func.isRequired
    })
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.authentication.isAuthenticated,
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        actions: {
            logout: () => {
                return dispatch(
                    logout()
                )
            }
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignOutButton)
