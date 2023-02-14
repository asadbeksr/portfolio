import MobileHeader from 'components/UI/Header/MobileHeader.jsx';
import { useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Footer } from 'components/UI/Footer/Footer';
// import { Header } from 'components/UI/Header/Header';
// import dynamic from 'next/dynamic';

// const Cursor = dynamic(
//   () => import('components/UI/Cursor'),
//   { ssr: false }
// );

export default function Layout({ children }) {
  const [theme, setTheme] = useState('light');
  const ref = useRef(null);
  const options = {
    smooth: true,
    repeat: true,
    multiplier: 2,
    touchMultiplier: 3,
    smartphone: {
      smooth: true,
    },
  };

  return (
    <div className={theme}>
      <MobileHeader />

      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container ref={ref}>
          {/* <Cursor /> */}
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </main>
      </LocomotiveScrollProvider>

      <button
        className={`toggle-button ${theme === 'light' ? 'moon' : 'circle'}`}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </div>
  );
}
