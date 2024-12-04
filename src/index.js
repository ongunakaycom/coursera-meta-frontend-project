import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import ErrorBoundary from './ErrorBoundary'; 
import theme from './theme'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </ErrorBoundary>
);
