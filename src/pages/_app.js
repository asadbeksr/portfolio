import { ThemeProvider } from '@emotion/react';
import Layout from 'components/Layout';
import 'styles/globals.scss';
import theme from 'mui-theme';
import { persistor, store } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Loader from 'components/UI/Loader/Loader';

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const handleStart = (url) => {
      if (url !== router.asPath) setLoading(true);
    };
    
    const handleComplete = (url) =>
    setTimeout(() => {
      setLoading(false);
    }, 500);
    
    if (loading) handleComplete()

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  if (loading) {
    return <Loader />;
  } else return <></>;
}

function MyApp({ Component, pageProps }) {
  const ref = useRef(null);
  const options = {
    smooth: true,
    multiplier: 3,
    smartphone: {
      smooth: true,
    },
  };

  return (
    <>
      <Provider store={store}>
        {typeof window !== 'undefined' ? (
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <LocomotiveScrollProvider options={options} containerRef={ref}>
                <main data-scroll-container ref={ref}>
                  <Loading />
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </main>
              </LocomotiveScrollProvider>
            </ThemeProvider>
          </PersistGate>
        ) : (
          <ThemeProvider theme={theme}>
            <Loading />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        )}
      </Provider>
    </>
  );
}

export default MyApp;
