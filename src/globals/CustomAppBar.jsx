import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { drawerWidth } from 'configurations/materialUI/uiConstants';
import CustomElevationScroll from 'globals/CustomElevationScroll';
import NavigateBackButton from 'globals/NavigateBackButton';
import SignOutButton from 'globals/SignOutButton';
import PropTypes from 'prop-types';
import React from 'react';


const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    }
}));
  
const CustomAppBar = props => {
    const classes = useStyles();

    const renderBackButton = () => (
        <NavigateBackButton />
    )

    return (
        <React.Fragment>
            <CustomElevationScroll {...props}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        {props.showBack && renderBackButton()}
                        <Typography variant="h6" className={classes.title} noWrap>
                            {props.pageTitle}
                        </Typography>
                        <SignOutButton />
                    </Toolbar>
                </AppBar>
            </CustomElevationScroll>
        </React.Fragment>
    )
}

CustomAppBar.propTypes = {
    showMenu: PropTypes.bool,
    showBack: PropTypes.bool,
    pageTitle: PropTypes.string.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
    containerRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.any })
    ])
}

CustomAppBar.defaultProps = {
    showMenu: false,
    showBack: false
}

export default CustomAppBar;
