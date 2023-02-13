import { ThemeProvider } from '@emotion/react';
import Layout from 'components/Layout';
import 'styles/globals.scss';
import theme from 'mui-theme';
import { persistor, store } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useState, useEffect } from 'react';
import Loader from 'components/UI/Loader/Loader';

function Loading({ children }) {
  const [loading, setLoading] = useState(true);
  const [end, setEnd] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setEnd(true)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return loading ? <Loader end={end} /> : <Layout>{children}</Layout>;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        {typeof window !== 'undefined' ? (
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <Loading>
                <Component {...pageProps} />
              </Loading>
            </ThemeProvider>
          </PersistGate>
        ) : (
          <ThemeProvider theme={theme}>
            <Loading>
              <Component {...pageProps} />
            </Loading>
          </ThemeProvider>
        )}
      </Provider>
    </>
  );
}

export default MyApp;
