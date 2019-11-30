import Box from "@material-ui/core/Box";
import CustomAppBar from "globals/CustomAppBar";
import CustomBottomNavigation from "globals/CustomBottomNavigation";
import CustomContainer from "globals/CustomContainer";
import CustomDrawer from "globals/CustomDrawer";
import PropTypes from 'prop-types';
import React from "react";

const AuthenticatedLayout = props => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [overflowComponentRef, setOverflowComponentRef] = React.useState(undefined);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box height="100%" width="100%" display="flex" overflow="auto">
      {/* <CssBaseline /> */}
      <CustomAppBar
        pageTitle={props.pageTitle}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        containerRef={overflowComponentRef}
        showBack={props.showBack}
      />
      <CustomDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
        <CustomContainer >
            <Box ref={ref => setOverflowComponentRef(ref)} p={1} pt={8} pb={8} height="100%" width="100%" overflow="auto" >
              {/* <Toolbar /> */}
              {props.children}
            </Box>
        </CustomContainer>
         <CustomBottomNavigation /> 
    </Box>
  );
}

AuthenticatedLayout.propTypes = {
  pageTitle: PropTypes.string,
  showBack: PropTypes.bool
};

AuthenticatedLayout.defaultProps = {
  pageTitle: "",
  showBack: false
};

export default AuthenticatedLayout;
