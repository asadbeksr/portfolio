import { Container } from '@mui/material';
import AText from '../Animated/Text';
import Spline from '@splinetool/react-spline';
import SectionTitle from '../SectionTitle/SectionTitle';

export function Main() {
  return (
    <Container>
      <div style={{ margin: '150px 0' }}>
        <AText text='Asadbek Savronov' variant='h2' dir='up' />
        <AText text='Creative' variant='h2' dir='up' delay='1' outlined />
        <AText text='Front-end Developer' variant='h2' dir='up' delay='1.5' />
        <AText text='based in Tashkent' variant='h2' dir='up' delay='2.3' />
        <AText
          text='Uzbekistan '
          variant='h2'
          dir='up'
          delay='3'
          outlined
          end='🇺🇿'
        />
      </div>

      <SectionTitle title="About" num="01"/>
      <SectionTitle title="Blog" num="02"/>
      <SectionTitle title="Projects" num="03"/>
      <SectionTitle title="Aboxut" num="04"/>
      <SectionTitle title="Contact" num="05"/>

      {/* <div style={{ marginTop: '150px' }}>
        <h6>SCROLL</h6>
      </div>
      <div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div><div style={{ marginTop: '150px' }}>
        <h6>DAMN YOU REALLY LIKE TO SCROLL</h6>
      </div> */}

      <Spline
        id='hero-sphere'
        scene='https://prod.spline.design/QoUsqkLcAPNMg1pz/scene.splinecode'
      />
    </Container>
  );
}
