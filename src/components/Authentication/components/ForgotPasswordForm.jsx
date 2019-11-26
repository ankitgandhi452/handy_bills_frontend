import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import { FastField, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import CustomPrimaryButton from 'globals/CustomPrimaryButton';
import CustomSecondaryButton from 'globals/CustomSecondaryButton';
import { stateSetter } from 'helpers/global';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as Yup from 'yup';

export default class ForgotPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.setter = stateSetter(this)
        const defaultState = {
            email: '',
            redirectUrl: 'http:localhost:3001'
        }
        this.forgotPasswordInitialState = {...defaultState, ...this.props.navigationState}
        this.forgotPasswordSchema = Yup.object().shape({
            email: Yup.string()
              .email('Invalid email'),
          });
    }

    static propTypes = {
        forgotPasswordSubmit: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired,
        navigationState: PropTypes.object.isRequired
    }

    // static defaultProps = {
    //     forgotPasswordSubmit: (values, actions) => {console.log("values", values, "actions", actions)}
    // }

    componentWillUnmount() {
        this.setter.cancel()
    }

    render() {
        console.log(this)
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
                            initialValues={this.forgotPasswordInitialState}
                            onSubmit={this.props.forgotPasswordSubmit}
                            validationSchema={this.forgotPasswordSchema}
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
                                            <FastField
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
                                            <CustomPrimaryButton
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Submit
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
                        <CustomSecondaryButton onClick={() => this.props.navigateTo('/login')}>
                            Login
                        </CustomSecondaryButton>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}
