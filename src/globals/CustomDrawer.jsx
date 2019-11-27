import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import { drawerWidth } from 'configurations/materialUI/uiConstants';
import { bottomNavigation } from 'configurations/routing/AppNavigation';
import { map } from "helpers/lodash";
import PropTypes from "prop-types";
import React from 'react';

const useStyles = makeStyles(theme => ({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerPaper: {
      width: drawerWidth
    },
}));

const CustomDrawer = props => {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();

    const drawer = (
        <div>
          <Toolbar />
          <Divider />
          <List>
            {map(bottomNavigation, (navigation, index) => (
              <ListItem button key={navigation.value}>
                <ListItemIcon>
                  {navigation.icon}
                </ListItemIcon>
                <ListItemText primary={navigation.label} />
              </ListItem>
            ))}
          </List>
        </div>
    );

    return (
        <React.Fragment>
            <Hidden smUp implementation="js">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "right" : "left"}
                    open={props.mobileOpen}
                    onClose={props.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                        root: classes.drawer
                    }}
                    ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="js">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                        root: classes.drawer
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </React.Fragment>
    )
}

CustomDrawer.propTypes = {
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    ),
    handleDrawerToggle: PropTypes.func.isRequired,
    mobileOpen: PropTypes.bool.isRequired
}

export default CustomDrawer
