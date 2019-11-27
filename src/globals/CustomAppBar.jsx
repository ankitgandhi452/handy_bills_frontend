import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { drawerWidth } from 'configurations/materialUI/uiConstants';
import CustomContainer from 'globals/CustomContainer';
import CustomElevationScroll from 'globals/CustomElevationScroll';
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
    return (
        <React.Fragment>
            <CustomElevationScroll {...props}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <CustomContainer >
                            <Typography variant="h6" className={classes.title}>
                                {props.pageTitle}
                            </Typography>
                        </CustomContainer>
                    </Toolbar>
                </AppBar>
            </CustomElevationScroll>
        </React.Fragment>
    )
}

CustomAppBar.propTypes = {
    showMenu: PropTypes.bool,
    pageTitle: PropTypes.string.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    mobileOpen: PropTypes.bool.isRequired
}

CustomAppBar.defaultProps = {
    showMenu: false
}

export default CustomAppBar;
