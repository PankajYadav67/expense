import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Auth.Context.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.tsx';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    black: '#000000',
    gray: '#666666',
    lightGray: '#979797',
    lightestGray: '#F7F8FA',
    blue: '#007AFF',
    red: "#FF3B30",
    orange: "#FF9500",
    yellow: "#FFCC00",
    green: "#4CD964",
    tealBlue: "#5AC8FA",
    purple: "#5856D6",
    pink: "#FF2D55"
  },
}

export const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ ChakraProvider>
      </BrowserRouter>
    </AuthProvider>
  </Provider>
)
