import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container className='AppContainer'>
      <Typography variant='h1'>Hello World</Typography>
    </Container>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}