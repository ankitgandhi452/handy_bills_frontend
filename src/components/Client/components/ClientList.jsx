import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { first, map } from 'helpers/lodash';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        overflow: "auto",
        height: "100%"
    },
    listSection: {
        backgroundColor: "inherit"
    },
    ul: {
        backgroundColor: "inherit",
        padding: 0,
        listStyle: "none"
    },
    listSubHeader: {
        backgroundColor: theme.palette.background.paper,
        // borderRadius: theme.shape.borderRadius,
    },
    textWidth: {
        width: "20%"
    }
}));

const ClientList = props => {
    const classes = useStyles();
    const getAvatar = (clientObj) => (
        <Avatar >{first(clientObj.name)}</Avatar>
    )
    const getItems = (clientObj, index) => (
        <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    {getAvatar(clientObj)}
                </ListItemAvatar>
                <ListItemText
                primary={clientObj.name}
                secondary={
                    <React.Fragment>
                        <Typography
                            className={classes.textWidth}
                            component="span"
                            variant="body2"
                            color="textPrimary"
                            noWrap
                            
                        >
                            {clientObj.email}
                        </Typography>
                        {clientObj.mobileNumber}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>
    )

    const getSubList = (alphabet, alphabeticalList, index) => (
        <li className={classes.listSection} key={index}>
            <ul className={classes.ul}>
                <ListSubheader className={classes.listSubHeader}>{alphabet}</ListSubheader>
                {map(alphabeticalList, (object, index) => (
                        getItems(object, index)
                    )
                )}
            </ul>
        </li>
    )
    const getList = (alphabeticalSortedList) => {
        let index = 0
        return map(alphabeticalSortedList, (value, key) => {
            index++
            return getSubList(key, value, index)
        })
    }
    console.log(props.sortedList, "props.sortedList", getSubList("A", props.sortedList.A))
    return (
        <List className={classes.root} subheader={<li />}>
            {getList(props.sortedList)}
        </List>
    )
}

ClientList.propTypes = {
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
    sortedList: PropTypes.object.isRequired
}

export default ClientList
