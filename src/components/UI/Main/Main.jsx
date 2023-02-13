import { Container } from '@mui/material';
import AText from '../Animated/Text';
import Spline from '@splinetool/react-spline';
import SectionTitle from '../SectionTitle/SectionTitle';
import WordToLetter from '../../../utils/WordToLetter.jsx';
import Hr from '../Animated/Hr';

export function Main() {
  return (
    <Container data-scroll-container>
      <div style={{ margin: '150px 0' }} id='header'>
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

      <div style={{ marginTop: '400px' }}>
        <Hr />
      </div>

      <SectionTitle title='About' num='01' />
      <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '56px', fontWeight: '700'}}>
      <WordToLetter word='Asadbek Savronov' speed={2}/>

        <div
          class='o-image_wrapper'
          data-scroll
          data-scroll-call='dynamicBackground'
          data-scroll-repeat
        >
          <div class='o-image' data-scroll data-scroll-speed='-2'>
            <img
              height={500}
              width={400}
              class='c-speed-block_image'
              src='/images/self.jpeg'
            />
          </div>
        </div>

      </div>
      <SectionTitle title='Blog' num='02' />
      <Hr />

      <SectionTitle title='Works' num='03' />
      <Hr />

      <SectionTitle title='Contact' num='04' />
      <Hr />

      <div style={{ padding: '50px' }}></div>

      {/* <div
        className='c-header_heading'
        data-scroll
        data-scroll-speed='-5'
        data-scroll-position='top'
        data-scroll-target='#header'
        data-scroll-repeat
      >
        <div className='o-layout'>
          <div
            className='o-layout_item u-1/2'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='-10'
            data-scroll-position='top'
            data-scroll-target='#header'
          >
            <h1 className='u-label c-header_heading_label'>
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
            className='o-layout_item u-1/2'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='2'
            data-scroll-position='top'
            data-scroll-target='#header'
          >
            <div className='u-text-right'>
              <p className='u-label c-header_heading_label'>v4.x – Edition</p>
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
      </h1> */}

      {/* <div style={{ margin: '0px' }} >
        <h1
          data-scroll
          data-scroll-delay='0.03'
          data-scroll-speed='6'
          data-scroll-call='dynamicColor'
          data-scroll-repeat
        >
          <div className='c-lerp-block'>
            <span
              className='c-lerp-block_index'
              data-scroll
              data-scroll-delay='0.2'
              data-scroll-speed='1'
              data-scroll-call='dynamicColor'
              data-scroll-repeat
            >
              Asadbek Savronov
            </span>
            <span
              className='c-lerp-block_title'
              data-scroll
              data-scroll-delay='0.6'
              data-scroll-speed='6'
            >
              <span>I have a lerp</span>
            </span>
          </div>
          <div className='c-lerp-block'>
            <span
              className='c-lerp-block_index'
              data-scroll
              data-scroll-delay='0.06'
              data-scroll-speed='6'
              data-scroll-call='dynamicColor'
              data-scroll-repeat
            >
              02
            </span>
            <span
              className='c-lerp-block_title'
              data-scroll
              data-scroll-delay='0.1'
              data-scroll-speed='6'
            >
              <span>
                Me too! <br />
                And even more
              </span>
            </span>
          </div>
        </h1>
      </div>
      <div style={{ marginTop: '200px' }}>&apos;</div>
      <div style={{ marginTop: '200px' }}>&apos;</div>
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

      <div style={{ marginTop: '200px' }}>&apos;</div>
      <div style={{ marginTop: '200px' }}>&apos;</div>
      <div style={{ marginTop: '200px' }}>&apos;</div>

      <div className='c-lerp-block'>
            <span
              className='c-lerp-block_index'
              data-scroll
              data-scroll-delay='0.06'
              data-scroll-speed='6'
              data-scroll-call='dynamicColor'
              data-scroll-repeat
            >
              07
            </span>
            <span
              className='c-lerp-block_title'
              data-scroll
              data-scroll-delay='0.1'
              data-scroll-speed='6'
            >
              <span>
                Me too! <br />
                And even more
              </span>
            </span>
          </div>


      <div style={{ marginTop: '200px' }}>&apos;</div>
      <div style={{ marginTop: '200px' }}>&apos;</div>
      <div style={{ marginTop: '200px' }}>&apos;</div>

      <WordToLetter
        word='DAMN YOU REALY LIKE SCROLL'
        speed='6'
        dir='vertical'
      />
      <div className='c-direction-block' id='direction'>
        <div className='c-direction-block_item -one'>
          <span
            className='c-direction-block_item_inner'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='6'
            data-scroll-target='#direction'
          >
            Im moving in this direction
          </span>
        </div>
        <div className='c-direction-block_item -two'>
          <span
            className='c-direction-block_item_inner'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='-8'
            data-scroll-target='#direction'
          >
            And in this direction
          </span>
        </div>
        <div className='c-direction-block_item -three'>
          <span
            className='c-direction-block_item_inner'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='9'
            data-scroll-target='#direction'
            data-scroll-delay='0.05'
          >
            Sooo customizable. Right?
          </span>
        </div>
        <div className='c-direction-block_item -four'>
          <span
            className='c-direction-block_item_inner'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='15'
            data-scroll-target='#direction'
          >
            I can also go in this direction
          </span>
        </div>
        <div className='c-direction-block_item -five'>
          <span
            className='c-direction-block_item_inner'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='-20'
            data-scroll-target='#direction'
            data-scroll-delay='0.05'
          >
            Ok, enough!!!!
          </span>
        </div>
      </div>

      <div style={{ marginTop: '200px' }}>&apos;</div>
      <div style={{ marginTop: '200px' }}>&apos;</div>
      <div style={{ marginTop: '200px' }}>&apos;</div>
      <div style={{ marginTop: '200px' }}>&apos;</div>
      <div style={{ marginTop: '200px' }}>&apos;</div>
      <div style={{ marginTop: '200px' }}>&apos;</div> */}
      <div data-scroll-speed='-7' id='hero-sphere'>
        <Spline
          // data-scroll
          data-scroll-speed='5'
          data-scroll-direction='horizontal'
          scene='https://prod.spline.design/QoUsqkLcAPNMg1pz/scene.splinecode'
        />
      </div>
    </Container>
  );
}
