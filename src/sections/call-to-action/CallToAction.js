import PropTypes from 'prop-types';
import Image from 'next/image';
// mui
import { useTheme } from '@mui/material/styles';
import { Container, Stack, Typography, Box, Button } from '@mui/material';
import { secondaryFont } from '../../theme/typography';

CallToAction.propTypes = {
  isOffset: PropTypes.bool,
};

export default function CallToAction({ isOffset }) {
  const muiTheme = useTheme();

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
          height: 500,
          textAlign: 'center',
          backgroundColor: muiTheme.palette.primary.main,
          color: 'common.black',
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          height="100%"
          sx={{ position: 'relative' }}
        >
          <Typography
            variant="h1"
            fontWeight={800}
            fontFamily={secondaryFont.style.fontFamily}
            sx={{ zIndex: 1 }}
          >
            READY TO <br /> COLLABORATE
          </Typography>

          <Image
            src="/assets/ellipse.svg"
            alt="ellipse-svg"
            width={730}
            height={360}
            style={{
              position: 'absolute',
              bottom: 0,
            }}
          />

          <Stack direction="row" gap={2} mt={2}>
            <Button
              variant="inherit"
              endIcon={
                <Image
                  src="/assets/arrow.svg"
                  alt="ellipse-svg"
                  width={10}
                  style={{
                    backgroundColor: muiTheme.palette.primary.main,
                    marginLeft: 30,
                    borderRadius: '50%',
                    height: 30,
                    width: 30,
                    padding: 6,
                    border: `2px solid ${muiTheme.palette.primary.main}`,
                  }}
                  height={10}
                />
              }
              onClick={() => console.log('click')}
              sx={{
                backgroundColor: 'common.black',
                color: 'common.white',
                ':hover': {
                  backgroundColor: 'common.black',
                  color: 'common.white',
                },
              }}
            >
              START PROJECT
            </Button>
            <Button
              color="inherit"
              variant="contained"
              endIcon={
                <Image
                  src="/assets/arrow.svg"
                  alt="ellipse-svg"
                  color="white"
                  width={10}
                  style={{
                    marginLeft: 30,
                    borderRadius: '50%',
                    height: 30,
                    width: 30,
                    padding: 6,
                    border: '2px solid black',
                  }}
                  height={10}
                />
              }
            >
              HELLO@ASADBEK.ME
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Box sx={{ height: 24 }} />
    </>
  );
}
