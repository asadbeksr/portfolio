import React from 'react';
import { Container, Typography } from '@mui/material';
export default function Custom404() {
  return (
    <Container>
      <div style={{ display: 'flex', height: '70vh', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className='h1-animated'>404 - Page Not Found</h1>
      </div>
    </Container>
  );
}
