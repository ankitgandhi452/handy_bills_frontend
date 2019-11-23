import AuthenticationWrapper from 'components/Authentication/AuthenticationWrapper'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class AuthenticationContainer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    signupSubmit = ( values, actions ) => {
        console.log('values', values)
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
    
    }
)

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer)
