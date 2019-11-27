import CssBaseline from '@material-ui/core/CssBaseline';
import NoSsr from '@material-ui/core/NoSsr';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'configurations/materialUI/theme';
import { persistor, store } from 'configurations/redux/store';
import ApplicationRouter from 'configurations/routing/ApplicationRouter';
import CustomLoader from 'globals/CustomLoader';
import SnackbarContainer from 'globals/SnackbarContainer';
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
            <SnackbarContainer>
              <ApplicationRouter />
            </SnackbarContainer>
          </ThemeProvider>
        </NoSsr>
      </PersistGate>
      </Provider>
  );
}

export default App;
