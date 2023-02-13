import MobileHeader from 'components/UI/Header/MobileHeader.jsx';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
// import { Footer } from 'components/UI/Footer/Footer';
// import { Header } from 'components/UI/Header/Header';
// import dynamic from 'next/dynamic';

// const Cursor = dynamic(
//   () => import('components/UI/Cursor'),
//   { ssr: false }
// );

export default function Layout({ children }) {
  const ref = useRef(null);
  const options = {
    smooth: true,
    repeat: true,
    multiplier: 1,
    touchMultiplier: 3,
    smartphone: {
      smooth: true,
    },
  };

  return (
    <>
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container ref={ref}>
          {/* <Cursor /> */}
          {/* <Header /> */}
          <MobileHeader />
          {children}
          {/* <Footer /> */}
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
