import Box from "@material-ui/core/Box";
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import CustomAppBar from "globals/CustomAppBar";
import CustomBottomNavigation from "globals/CustomBottomNavigation";
import CustomContainer from "globals/CustomContainer";
import CustomDrawer from "globals/CustomDrawer";
import PropTypes from 'prop-types';
import React from "react";

const AuthenticatedLayout = props => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box height="100%" width="100%" display="flex">
      <CssBaseline />
      <CustomAppBar
        pageTitle={props.pageTitle}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <CustomDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
        <CustomContainer >
            <Box p={2} pb={8} flexGrow={1} boxShadow={2} overflow="auto">
                <Toolbar />
                {props.children}
            </Box>
        </CustomContainer>
         <CustomBottomNavigation /> 
    </Box>
  );
}

AuthenticatedLayout.propTypes = {
  pageTitle: PropTypes.string
};

AuthenticatedLayout.defaultProps = {
  pageTitle: ""
};

export default AuthenticatedLayout;
