import PropTypes from 'prop-types';
// next
import dynamic from 'next/dynamic';
// @mui
import { Stack, Container } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// config
import { HEADER } from '../../config-global';
// components
import Footer from './Footer';
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

      <Container component="main">
        <Stack
          sx={{
            py: 12,
            m: 'auto',
          }}
        >
          {children}
        </Stack>
      </Container>

      <Footer />
    </>
  );
}
