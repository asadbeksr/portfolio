import { ThemeProvider } from '@emotion/react';
import Layout from 'components/Layout';
import 'styles/globals.scss';
import theme from 'mui-theme';
import { persistor, store } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

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
    <Provider store={store}>
      {typeof window !== 'undefined' ? (
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <LocomotiveScrollProvider options={options} containerRef={ref}>
              <main data-scroll-container ref={ref}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </main>
            </LocomotiveScrollProvider>
          </ThemeProvider>
        </PersistGate>
      ) : (
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      )}
    </Provider>
  );
}

export default MyApp;
