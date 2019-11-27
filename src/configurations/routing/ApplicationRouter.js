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
                    <AuthenticatedRoute path="/">
                        <ClientContainer />
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
                                pathname: "/login",
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
                                pathname: "/",
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