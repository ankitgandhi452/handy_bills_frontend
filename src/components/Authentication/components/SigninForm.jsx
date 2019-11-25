import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import CustomPrimaryButton from 'globals/CustomPrimaryButton';
import CustomSecondaryButton from 'globals/CustomSecondaryButton';
import { stateSetter } from 'helpers/global';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as Yup from 'yup';

export default class SigninForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
        }
        this.setter = stateSetter(this)
        this.signupInitialState = {
            email: '',
            password: '',
        }
        this.signupSchema = Yup.object().shape({
            email: Yup.string()
              .email('Invalid email'),
            password: Yup.string()
                .min(8, 'Too Short!')
                .max(32, 'Too Long!'),
          });
    }

    static propTypes = {
        signinSubmit: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired
    }

    // static defaultProps = {
    //     signupSubmit: (values, actions) => {console.log("values", values, "actions", actions)}
    // }

    componentWillUnmount() {
        this.setter.cancel()
    }

    togglePasswordShow = (key) => {
        let currentState = this.state[key];
        this.setter.setState({[key]: !currentState})
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={12} md={8}>
                    <Box p={2} pt={5} pb={5} borderRadius="borderRadius" boxShadow={3} bgcolor="background.default">
                        <Formik
                            initialValues={this.signupInitialState}
                            onSubmit={this.props.signinSubmit}
                            validationSchema={this.signinSchema}
                            render={({values, isSubmitting}) => (
                                <Form>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={12} md={8}>
                                            <Field
                                                name="email"
                                                type="email"
                                                component={TextField}
                                                margin="normal"
                                                fullWidth
                                                label="Email"
                                                variant="outlined"
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start"><EmailRoundedIcon /></InputAdornment>,
                                                }}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={8}>
                                            <Field
                                                name="password"
                                                type={this.state.showPassword ? "text" : "password"}
                                                component={TextField}
                                                margin="normal"
                                                fullWidth
                                                label="Password"
                                                variant="outlined"
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start"><VpnKeyRoundedIcon /></InputAdornment>,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                        <IconButton
                                                            edge="end"
                                                            aria-label="toggle password visibility"
                                                            onClick={() => {this.togglePasswordShow('showPassword')}}
                                                        >
                                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={8}>
                                            <CustomPrimaryButton
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Login
                                            </CustomPrimaryButton>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8} container alignItems="center" direction="row">
                    <Grid item xs  >
                        <Divider variant="middle" />
                    </Grid>
                    <Grid item >
                        <Typography align="center" variant="overline" color="textSecondary">
                            OR
                        </Typography>
                    </Grid>
                    <Grid item xs  >
                        <Divider variant="middle" />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box p={2} borderRadius="borderRadius" bgcolor="background.default" boxShadow={3} color="primary.main">
                        <CustomSecondaryButton onClick={() => this.props.navigateTo('/register')}>
                            Register
                        </CustomSecondaryButton>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}
