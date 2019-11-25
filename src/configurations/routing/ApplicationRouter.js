import CustomLoader from "globals/CustomLoader";
import { isAuthenticated } from "helpers/global";
import React, { Suspense } from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";


const AuthenticationContainer = React.lazy(() => import("components/Authentication/AuthenticationContainer"))

const ApplicationRouter = () => (
    (
        <Router
            hashType='noslash'
        >
            <Suspense fallback={<CustomLoader loading={true} withTransition={false} />}>
                <Switch>
                    
                    <Route path="/login">
                        <AuthenticationContainer />
                    </Route>
                    <Route path="/register">
                        <AuthenticationContainer />
                    </Route>
                    <AuthenticatedRoute path="/">
                        <AuthenticationContainer />
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

export default ApplicationRouter;