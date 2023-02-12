import { Container } from '@mui/material';
import AText from '../Animated/Text';
import Spline from '@splinetool/react-spline';
import SectionTitle from '../SectionTitle/SectionTitle';
import wordToLetter from '../../../utils/wordToLetter';
import WordToLetter from '../../../utils/wordToLetter';

export function Main() {
  return (
    <Container>
      <div id='header' style={{ margin: '150px 0' }}>
        <AText text='Asadbek Savronov' variant='h2' dir='up' speed={2} />
        <AText
          text='Creative'
          variant='h2'
          dir='up'
          delay='1'
          outlined
          speed={2}
        />
        <AText
          text='Front-end Developer'
          variant='h2'
          dir='up'
          delay='1.5'
          speed={2}
        />
        <AText
          text='based in Tashkent'
          variant='h2'
          dir='up'
          delay='2.3'
          speed={2}
        />
        <AText
          text='Uzbekistan '
          variant='h2'
          dir='up'
          delay='3'
          outlined
          end='🇺🇿'
          speed={2}
        />
      </div>

      <div
        class='c-header_heading'
        data-scroll
        data-scroll-speed='-5'
        data-scroll-position='top'
        data-scroll-target='#header'
        data-scroll-repeat
      >
        <div class='o-layout'>
          <div
            class='o-layout_item u-1/2'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='-10'
            data-scroll-position='top'
            data-scroll-target='#header'
          >
            <h1 class='u-label c-header_heading_label'>
              <a
                href='https://locomotive.ca'
                target='_blank'
                rel='noopener noreferrer'
              >
                Locomotive.ca
              </a>
            </h1>
          </div>
          <div
            class='o-layout_item u-1/2'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='2'
            data-scroll-position='top'
            data-scroll-target='#header'
          >
            <div class='u-text-right'>
              <p class='u-label c-header_heading_label'>v4.x – Edition</p>
            </div>
          </div>
        </div>
      </div>

      <h1
        data-scroll
        data-scroll-delay='0.03'
        data-scroll-speed='6'
        data-scroll-call='dynamicColor'
        data-scroll-repeat
      >
        DAMN YOU REALY LIKE SCROLL
      </h1>

      {wordToLetter('FRONTEND')}

      <SectionTitle title='About' num='01' />
      <SectionTitle title='Blog' num='02' />
      <SectionTitle title='Projects' num='03' />
      <SectionTitle title='Aboxut' num='04' />
      <SectionTitle title='Contact' num='05' />

      <div style={{ marginTop: '150px' }}>
        <h1
          data-scroll
          data-scroll-delay='0.03'
          data-scroll-speed='6'
          data-scroll-call='dynamicColor'
          data-scroll-repeat
        >
          SCROLL
        </h1>
      </div>

      <div style={{ marginTop: '200px' }}>'</div>
      <div style={{ marginTop: '200px' }}>'</div>

      <div style={{ display: 'flex', gap: '1px', fontSize: '36px' }}>
        <h1 data-scroll data-scroll-delay='0.13' data-scroll-speed='-5'>
          B
        </h1>
        <h1 data-scroll data-scroll-delay='0.12' data-scroll-speed='-5'>
          y
        </h1>
        <h1 data-scroll data-scroll-delay='0.11' data-scroll-speed='-5'>
          {' '}
        </h1>
        <h1 data-scroll data-scroll-delay='0.1' data-scroll-speed='-5'>
          L
        </h1>
        <h1 data-scroll data-scroll-delay='0.09' data-scroll-speed='-5'>
          e
        </h1>
        <h1 data-scroll data-scroll-delay='0.08' data-scroll-speed='-5'>
          t
        </h1>
        <h1 data-scroll data-scroll-delay='0.07' data-scroll-speed='-5'>
          t
        </h1>
        <h1 data-scroll data-scroll-delay='0.06' data-scroll-speed='-5'>
          e
        </h1>
        <h1 data-scroll data-scroll-delay='0.05' data-scroll-speed='-5'>
          r
        </h1>
      </div>

      <div style={{ marginTop: '200px' }}>'</div>
      <div style={{ marginTop: '200px' }}>'</div>
      <div style={{ marginTop: '200px' }}>'</div>
      <div style={{ marginTop: '200px' }}>'</div>
      <div style={{ marginTop: '200px' }}>'</div>
      <div style={{ marginTop: '200px' }}>'</div>

      <WordToLetter
        word='DAMN YOU REALY LIKE SCROLL'
        speed='6'
        dir='vertical'
      />

      <div style={{ marginTop: '200px' }}>'</div>
      <div style={{ marginTop: '200px' }}>'</div>
      <div style={{ marginTop: '200px' }}>'</div>
      <div style={{ marginTop: '200px' }}>'</div>
      <div style={{ marginTop: '200px' }}>'</div>
      <div data-scroll data-scroll-speed='-7' id='hero-sphere'>
        <Spline
          data-scroll
          data-scroll-speed='5'
          data-scroll-direction='horizontal'
          scene='https://prod.spline.design/QoUsqkLcAPNMg1pz/scene.splinecode'
        />
      </div>
    </Container>
  );
}
