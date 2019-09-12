import React from 'react';
import './App.css';
import NoSsr from '@material-ui/core/NoSsr';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


function App() {
  return [
    <NoSsr defer={true}>
      <CssBaseline />
      <Container maxWidth="md" fixed>
          
      </Container>
    </NoSsr>
  ];
}

export default App;
