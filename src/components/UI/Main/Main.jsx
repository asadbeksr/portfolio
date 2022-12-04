import { Container } from '@mui/material';
import AText from '../Animated/Text';

export function Main() {
  return (
    <Container>
      <div style={{ marginTop: '150px'}}>
        <AText text='Asadbek Savronov' variant='h5' dir='up' />
        <AText text='Creative' variant='h5' dir='h5' delay="1" />
        <AText text='Front-end Developer' variant='h5' dir='up' delay="1.5" />
        <AText text='based in Tashkent, Uzbekistan' variant='h5' dir='up' delay="2.3" />
      </div>
    </Container>
  );
}
