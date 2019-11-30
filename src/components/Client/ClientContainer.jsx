import ClientWrapper from 'components/Client/ClientWrapper';
import { stateSetter } from 'helpers/global';
import { last } from 'helpers/lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class ClientContainer extends Component {
    static propTypes = {
        userId: PropTypes.string.isRequired,
        clients: PropTypes.arrayOf(
            PropTypes.shape(
                {
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    mobileNumber: PropTypes.string.isRequired,
                    email: PropTypes.string.isRequired
                }
            )
        ).isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            pageType: 'index'
        }
        this.setter = stateSetter(this)
    }

    
    componentDidMount() {
        const pageType = this.getPageType();
        this.setter.setState({ pageType });
    }

    componentDidUpdate() {
        const pageType = this.getPageType();
        const prevPageType = this.state.pageType;
        // console.log(this.props.location.pathname, pageType, prevPageType)
        if (pageType !== prevPageType) {
            this.setter.setState({ pageType });
        }
    }

    getPageType = () => (
        last(this.props.location.pathname.split("/")) === "" ? 'index' : last(this.props.location.pathname.split("/"))
    )

    navigateTo = (route, params={}) => {
        this.props.history.push({
            pathname: route,
            state: params
        })
    }

    render() {
        console.log(this.props)
        return (
            <ClientWrapper
                pageType={this.state.pageType}
                clients={this.props.clients}
                navigateTo={this.navigateTo}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    userId: state.user.data.id,
    clients: state.client.data
})

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientContainer))
