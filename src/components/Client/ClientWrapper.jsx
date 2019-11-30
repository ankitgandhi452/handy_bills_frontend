import ClientIndex from 'components/Client/components/ClientIndex'
import ClientNew from 'components/Client/components/ClientNew'
import AuthenticatedLayout from 'globals/AuthenticatedLayout'
import { getPageName } from 'helpers/constants'
import { stateSetter } from 'helpers/global'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ClientWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBack: this.shouldShowBack(this.props.pageType)
        }

        this.setter = stateSetter(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.pageType !== prevProps.pageType) {
            let showBack = this.state.showBack;
            const newShowBack = this.shouldShowBack(this.props.pageType)
            if (showBack !== newShowBack) {
                showBack = newShowBack;
                this.setter.setState({showBack})
            }
        }
    }

    componentWillUnmount() {
        this.setter.cancel()
    }


    static propTypes = {
        pageType: PropTypes.string.isRequired,
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
        navigateTo: PropTypes.func.isRequired,
    }

    static defaultProps = {
        pageType: 'index'
    }

    getPageTitle = () => (
        getPageName('client', this.props.pageType)
    )

    getRelavantPage = () => {
        const pageMap = {
            index:  <ClientIndex clients={this.props.clients} navigateTo={this.props.navigateTo} />,
            new: <ClientNew navigateTo={this.props.navigateTo} />
        }

        return pageMap[this.props.pageType]
    }

    shouldShowBack = (pageType) => (
        pageType === 'index' ? false : true
    ) 

    render() {
        return (
            <AuthenticatedLayout
                pageTitle={this.getPageTitle()}
                showBack={this.state.showBack}
            >
               {this.getRelavantPage()} 
            </AuthenticatedLayout>
        )
    }
}
