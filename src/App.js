import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import NoSsr from '@material-ui/core/NoSsr';
import { ThemeProvider } from '@material-ui/styles';
import AuthenticationContainer from 'components/Authentication/AuthenticationContainer';
import { theme } from 'configurations/materialUI/theme';
import { persistor, store } from 'configurations/redux/store';
import CustomContainer from 'globals/CustomContainer';
import CustomLoader from 'globals/CustomLoader';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<CustomLoader loading={true} />} persistor={persistor}>
        <NoSsr defer={true}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <CustomContainer maxWidth="md">
              <Box height="100vh">
                <AuthenticationContainer />
              </Box>
            </CustomContainer>
          </ThemeProvider>
        </NoSsr>
      </PersistGate>
      </Provider>
  );
}

export default App;
