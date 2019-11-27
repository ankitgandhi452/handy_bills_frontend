import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import { bottomNavigation } from 'configurations/routing/AppNavigation';
import { map } from 'helpers/lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }
}));
  
const CustomBottomNavigation = props => {
    const classes = useStyles();
    const [selectedBottomNav, setSelectedBottomNav] = useState(props.currentScreen);
    
    const renderBottomNavigationActions = () => (
        map(bottomNavigation, (navigation, index) => (
                <BottomNavigationAction
                    key={index}
                    label={navigation.label}
                    value={navigation.value}
                    icon={navigation.icon}
                    showLabel={true}
                />
            )
        )
    )

    const handleChange = (event, newValue) => {
        setSelectedBottomNav(newValue);
        console.log("navigation", event, newValue);
    }

    return (
        <React.Fragment >
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <BottomNavigation
                    value={selectedBottomNav}
                    onChange={handleChange}
                    showLabels={true}
                >
                    {renderBottomNavigationActions()}
                </BottomNavigation>
                
            </AppBar>
        </React.Fragment>
    )
}

CustomBottomNavigation.propTypes = {
    navigateToNav: PropTypes.func,
    currentScreen: PropTypes.string,
}

CustomBottomNavigation.defaultProps = {
    currentScreen: 'clients'
}

export default CustomBottomNavigation
