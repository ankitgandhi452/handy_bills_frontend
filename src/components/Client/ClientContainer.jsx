import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class ClientContainer extends Component {
    static propTypes = {
        userId: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                Client Container
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userId: state.user.data.id
})

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientContainer))
