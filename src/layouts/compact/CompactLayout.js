import PropTypes from 'prop-types';
// next
import dynamic from 'next/dynamic';
// @mui
import { Container } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// config
import { HEADER } from '../../config-global';
// components
import Footer from './Footer';
import CallToAction from '../../sections/call-to-action/CallToAction';
//
const Header = dynamic(() => import('./Header'), { ssr: false });

// ----------------------------------------------------------------------

CompactLayout.propTypes = {
  children: PropTypes.node,
};

export default function CompactLayout({ children }) {
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <>
      <Header isOffset={isOffset} />

      <Container
        component="main"
        maxWidth={false}
        sx={{
          px: {
            md: '40px !important',
          },
          pt: 11,
        }}
      >
        {children}
        <CallToAction />
        <Footer />
      </Container>
    </>
  );
}
