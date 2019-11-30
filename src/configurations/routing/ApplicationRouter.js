import { defaultAuthenticatedRoute, defaultUnauthenticatedRoute } from "configurations/routing/AppNavigation";
import CustomLoader from "globals/CustomLoader";
import { isAuthenticated } from "helpers/global";
import React, { Suspense } from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";


const AuthenticationContainer = React.lazy(() => import("components/Authentication/AuthenticationContainer"))
const ClientContainer = React.lazy(() => import("components/Client/ClientContainer"))

const ApplicationRouter = () => (
    (
        <Router>
            <Suspense fallback={<CustomLoader loading={true} withTransition={false} />}>
                <Switch>
                    
                    <UnauthenticatedRoute path="/login">
                        <AuthenticationContainer />
                    </UnauthenticatedRoute>
                    <UnauthenticatedRoute path="/register">
                        <AuthenticationContainer />
                    </UnauthenticatedRoute>
                    <UnauthenticatedRoute path="/forgotPassword">
                        <AuthenticationContainer />
                    </UnauthenticatedRoute>
                    <AuthenticatedRoute path="/clients/index">
                        <ClientContainer />
                    </AuthenticatedRoute>
                    <AuthenticatedRoute path="/clients/new">
                        <ClientContainer />
                    </AuthenticatedRoute>
                    <AuthenticatedRoute path="/">
                        <Redirect
                            to={{
                                pathname: defaultAuthenticatedRoute,
                            }}
                        />
                    </AuthenticatedRoute>
                </Switch>
            </Suspense>
        </Router>
    )
)

const AuthenticatedRoute = ({children, ...rest}) => (
    <Route
        {...rest}
        render={
            ({ location }) => 
            {
                console.log(location)
                return isAuthenticated() ?
                    (
                        children
                    )
                    :
                    (
                        <Redirect
                            to={{
                                pathname: defaultUnauthenticatedRoute,
                                state: { from: location }
                            }}
                        />
                    )}
            
        }
    />
)

const UnauthenticatedRoute = ({ children, ...rest }) => (
    <Route
        {...rest}
        render={
            ({ location }) => 
            {
                console.log(location)
                return isAuthenticated() ?
                    (
                        <Redirect
                            to={{
                                pathname: defaultAuthenticatedRoute,
                                state: { from: location }
                            }}
                        />
                    )
                    :
                    (
                        children
                    )
            }
            
        }
    />
)

export default ApplicationRouter;