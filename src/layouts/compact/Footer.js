import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// config
import { HEADER } from '../../config-global';
// utils
import { bgBlur } from '../../utils/cssStyles';
// components
import { secondaryFont } from '../../theme/typography';

// ----------------------------------------------------------------------

Footer.propTypes = {
  isOffset: PropTypes.bool,
};

export default function Footer({ isOffset }) {
  const theme = useTheme();

  const FLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
  }));

  const FLink = styled(Typography)(({ theme }) => ({
    // color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Container
        maxWidth="xl"
        component="footer"
        sx={{
          pt: 4,
          pb: 8,
          pl: '40px !important',
          borderRadius: '48px',
          height: 700,
          textAlign: 'center',
          backgroundColor: (theme) => theme.palette.grey[900],
          color: 'common.white',
        }}
      >
        <Grid container sx={{ height: '100%', textAlign: 'start' }}>
          <Grid item xs={5}>
            <Stack justifyContent="space-between" alignItems="flex-start" height="100%">
              <Typography
                variant="h1"
                fontWeight={800}
                color="primary"
                fontFamily={secondaryFont.style.fontFamily}
              >
                REACH US
              </Typography>

              <Typography variant="h3" fontWeight={800}>
                BEK.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack alignItems="flex-start" justifyContent="space-between" sx={{ height: '100%' }}>
              <Typography variant="h1" fontWeight={800} fontFamily={secondaryFont.style.fontFamily}>
                AS YOU CAN
              </Typography>

              <Grid container sx={{ height: '300px' }}>
                <Grid xs={6}>
                  <Stack gap={4}>
                    <Stack gap={2}>
                      <FLabel>Studio</FLabel>
                      <FLink>
                        Dieter Rd 784 <br />
                        Bauhaus Building Floor 5th
                      </FLink>
                    </Stack>
                    <Stack gap={2}>
                      <FLabel>Business</FLabel>
                      <FLink>
                        talk@rams.com <br />
                        +62 666 888 32
                      </FLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid xs={6}>
                  <Stack direction="row">
                    <Stack width={300} gap={2}>
                      <FLabel>Social</FLabel>
                      <FLink>GitHub</FLink>
                      <FLink>Linkedin</FLink>
                      <FLink>Instagram</FLink>
                      <FLink>Telegram</FLink>
                    </Stack>
                    <Stack width={300} gap={2}>
                      <FLabel>Menu</FLabel>
                      <FLink>About</FLink>
                      <FLink>Works</FLink>
                      <FLink>Blog</FLink>
                      <FLink>Contact</FLink>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
              <Stack
                justifyContent="space-between"
                direction="row"
                width="100%"
                sx={{
                  mb: 1,
                }}
              >
                <FLabel>Bek®, inc. 2023. Legal Terms</FLabel>
                <FLabel> Design by Neuwebz</FLabel>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ height: 24 }} />
    </>
  );
}
