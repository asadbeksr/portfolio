import PropTypes from 'prop-types';
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Link } from '@mui/material';
// config
import { HEADER } from '../../config-global';
// ----------------------------------------------------------------------

Header.propTypes = {
  isOffset: PropTypes.bool,
};

export default function Header({ isOffset }) {
  const theme = useTheme();

  return (
    <AppBar color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar
        sx={{
          px: {
            lg: '80px !important'
          }, // Increase left padding
          justifyContent: 'space-between',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),

          // ...(isOffset && {
          //   ...bgBlur({ color: theme.palette.background.default }),
          //   height: {
          //     md: HEADER.H_MAIN_DESKTOP - 16,
          //   },
          // }),
        }}
      >
        {/* <Logo /> */}
        <Link
          component={NextLink}
          href="/"
          variant="h3"
          color="primary"
          fontWeight={800}
          sx={{
            textDecoration: 'none !important',
          }}
        >
          BEK.
        </Link>
        <Link variant="subtitle2" color="inherit">
          Need Help?
        </Link>
      </Toolbar>

      {/* {isOffset && <Shadow />} */}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
