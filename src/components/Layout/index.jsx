import { Footer } from 'components/UI/Footer/Footer';
import { Header } from 'components/UI/Header/Header';
// import dynamic from 'next/dynamic';

// const Cursor = dynamic(
//   () => import('components/UI/Cursor'),
//   { ssr: false }
// );

export default function Layout({ children }) {
  return (
    <>
      {/* <Cursor /> */}
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}
