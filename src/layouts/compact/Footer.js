import PropTypes from 'prop-types';
import NextLink from 'next/link';
// mui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Stack, Typography, Box } from '@mui/material';
import { secondaryFont } from '../../theme/typography';

Footer.propTypes = {
  isOffset: PropTypes.bool,
};

export default function Footer({ isOffset }) {
  const muiTheme = useTheme();

  const FLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
  }));

  const FLink = styled(NextLink)(({ theme }) => ({
    // color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Container
        component="footer"
        maxWidth={false}
        sx={{
          pt: 4,
          pb: 8,
          px: '40px !important',
          mt: 2,
          borderRadius: '48px',
          height: 700,
          textAlign: 'center',
          backgroundColor: muiTheme.palette.grey[900],
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
                REACH ME
              </Typography>

              <Typography variant="h3" fontWeight={800}>
                BEK.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={5}>
            <Stack justifyContent="space-between" height="100%">
              <Typography variant="h1" fontWeight={800} fontFamily={secondaryFont.style.fontFamily}>
                AS YOU CAN
              </Typography>

              <Grid container sx={{ height: '300px' }}>
                <Grid xs={6}>
                  <Stack gap={4}>
                    <Stack gap={2}>
                      <FLabel>Location</FLabel>
                      <FLink href="https://www.google.com/search?q=tashkent" target="_blank">
                        Uzbekistan <br />
                        Tashkent city
                      </FLink>
                    </Stack>
                    <Stack gap={2}>
                      <FLabel>Business</FLabel>
                      <Stack>
                      <FLink href="mailto:hello@asadbek.me">hello@asadbek.me</FLink>
                      <FLink href="tel:+998904861916">+998 90 486 1916</FLink>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row">
                    <Stack width={300} gap={2}>
                      <FLabel>Social</FLabel>
                      <FLink target="_blank" href="https://github.com/asadbeksr">
                        GitHub
                      </FLink>
                      <FLink target="_blank" href="https://www.linkedin.com/in/asadbeksr/">
                        Linkedin
                      </FLink>
                      <FLink target="_blank" href="https://www.instagram.com/asadbeksr/">
                        Instagram
                      </FLink>
                      <FLink target="_blank" href="https://t.me/asadbeksavronov">
                        Telegram
                      </FLink>
                    </Stack>
                    <Stack width={300} gap={2}>
                      <FLabel>Menu</FLabel>
                      <FLink href="/about">About</FLink>
                      <FLink href="/works">Works</FLink>
                      <FLink href="/blog">Blog</FLink>
                      <FLink href="/contact">Contact</FLink>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <FLabel>Bek®, inc. 2023. Legal Terms</FLabel>
                <FLabel>Design by Neuwebz</FLabel>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ height: 24 }} />
    </>
  );
}
