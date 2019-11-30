import Box from '@material-ui/core/Box';
import Hidden from "@material-ui/core/Hidden";
import AddIcon from '@material-ui/icons/Add';
import ClientList from 'components/Client/components/ClientList';
import FuzzySearch from 'fuzzy-search';
import CustomNewFab from 'globals/CustomNewFab';
import CustomPrimaryButton from 'globals/CustomPrimaryButton';
import CustomSearch from 'globals/CustomSearch';
import { stateSetter } from 'helpers/global';
import { first, orderBy, reduce, upperCase } from 'helpers/lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ClientIndex extends Component {
    static propTypes = {
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

    constructor(props) {
        super(props);
        this.state = {
            aplhabeticalSortedList: this.getAplhabeticalSortedList(this.props.clients)
        }
        this.setter = stateSetter(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.clients !== prevProps.clients  ) {
            const aplhabeticalSortedList = this.getAplhabeticalSortedList(this.props.clients)
            this.setter.setState({aplhabeticalSortedList})
        }
    }

    componentWillUnmount() {
        this.setter.cancel()
    }

    getAplhabeticalSortedList = (clients) => {
        const sortedList = orderBy(clients, ['name', 'email'], ['asc', 'asc'])
        const sortedObject = reduce(sortedList,
            (accumulator, object) => {
                let objectKey = upperCase(first(object.name));
                if (accumulator[objectKey]) {
                    accumulator[objectKey].push(object)
                } else {
                    accumulator[objectKey] = [object]
                }
                return accumulator; 
            },
            {})
        return sortedObject;
    }
    

    navigateToNew = (event) => {
        this.props.navigateTo('/clients/new')
    }

    handleSearch = (value) => {
        const searcher = new FuzzySearch(this.props.clients, ['name', 'email'], {
            caseSensitive: false,
            sort: true
        });
        const filteredList = searcher.search(value);
        const aplhabeticalSortedList = this.getAplhabeticalSortedList(filteredList)
        this.setter.setState({aplhabeticalSortedList})
    }

    render() {
        return (
            <Box width="100%" height="100%" overflow="hidden">
                <Box width="100%" display="flex" justifyContent="space-between" pt={2} pb={2}>
                    <CustomSearch handleChange={this.handleSearch} />
                        <Hidden xsDown implementation="js">
                            <Box minWidth="10%">
                                <CustomPrimaryButton onClick={this.navigateToNew} >
                                    <AddIcon />
                                </CustomPrimaryButton>
                            </Box>
                        </Hidden>
                </Box>
                <Box height="100%" pb={8} overflow="auto">
                    <ClientList
                        clients={this.props.clients}
                        sortedList={this.state.aplhabeticalSortedList}
                    />
                </Box>
                <Hidden smUp implementation="js">
                    <CustomNewFab onClick={this.navigateToNew} />
                </Hidden>
            </Box>
           
        )
    }
}

export default ClientIndex
