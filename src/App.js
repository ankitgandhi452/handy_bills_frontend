import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import NoSsr from '@material-ui/core/NoSsr';
import React from 'react';
import './App.css';



function App() {
  return (
    <NoSsr defer={true}>
      <CssBaseline />
      <Container maxWidth="md" fixed>
      </Container>
    </NoSsr>
  );
}

export default App;
