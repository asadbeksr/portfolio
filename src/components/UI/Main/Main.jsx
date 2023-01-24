import { Container } from '@mui/material';
import AText from '../Animated/Text';
import Spline from '@splinetool/react-spline';

export function Main() {
  return (
    <Container>
      <div style={{ marginTop: '150px' }}>
        <AText text='Asadbek Savronov' variant='h3' dir='up' />
        <AText text='Creative' variant='h3' dir='up' delay='1' />
        <AText text='Front-end Developer' variant='h3' dir='up' delay='1.5' />
        <AText text='based in Tashkent' variant='h3' dir='up' delay='2.3' />
        <AText text='Uzbekistan' variant='h3' dir='up' delay='3' />
      </div>

      <Spline
        id='hero-sphere'
        scene='https://prod.spline.design/QoUsqkLcAPNMg1pz/scene.splinecode'
      />
    </Container>
  );
}
