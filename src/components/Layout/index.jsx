import { Footer } from 'components/UI/Footer/Footer';
import { Header } from 'components/UI/Header/Header';
import MobileHeader from 'components/UI/Header/MobileHeader.jsx';
import dynamic from 'next/dynamic';

// const Cursor = dynamic(
//   () => import('components/UI/Cursor'),
//   { ssr: false }
// );

export default function Layout({ children }) {
  return (
    <>
      {/* <Cursor /> */}
      {/* <Header /> */}
      <MobileHeader />
      {children}
      {/* <Footer /> */}
    </>
  );
}
