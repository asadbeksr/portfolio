import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
  fadeInUp,
} from 'utils/animations';

const Hamburger = ({ state }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(reveal2, reveal1);
      gsap.to(menuLayer, { duration: 1, css: { display: 'none' } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menuLayer, { duration: 0, css: { display: 'block' } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });
      fadeInUp(info);
      staggerReveal(reveal1, reveal2);
      staggerText([line1, line2, line3, line4]);
    }
  }, [state]);

  return (
    <div className='mobileHeader'>
    <div ref={(el) => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={(el) => (reveal1 = el)}
        className='menu-secondary-background-color'
      ></div>
      <div ref={(el) => (reveal2 = el)} className='menu-layer'>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link href='/works'>
                      <a
                        ref={(el) => (line1 = el)}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                      >
                        Works
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blog'>
                      <a
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line2 = el)}
                      >
                        Blog
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href='/about'>
                      <a
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line3 = el)}
                      >
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a 
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line4 = el)}
                      >
                        Contact 
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className='info'>
                <h3>Asadbek Savronov</h3>
                <p>
                  Creative Front-end Developer based in Tashkent, Uzbekistan.
                </p>
                <span style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                  <a
                    target='_blank'
                    rel="noreferrer" 
                    href='https://github.com/asadbeksr'
                    className='link link--metis'
                  >
                    <Image
                      width={50}
                      height={50}
                      alt='github'
                      src='https://img.icons8.com/sf-regular-filled/96/ffffff/github.png'
                    />
                  </a>
                  <a
                    target='_blank'
                    rel="noreferrer" 
                    href='https://www.instagram.com/asadbeksr/'
                    className='link link--metis'
                  >
                    <Image
                      width={50}
                      height={50}
                      alt='instagram'
                      src='https://img.icons8.com/sf-regular-filled/96/ffffff/linkedin.png'
                    />
                  </a>
                  <a
                    target='_blank'
                    rel="noreferrer" 
                    href='https://www.linkedin.com/in/asadbeksr/'
                    className='link link--metis'
                  >
                    <Image
                      width={50}
                      height={50}
                      alt='linkedin'
                      src='https://img.icons8.com/sf-regular-filled/96/ffffff/instagram-new.png'
                    />
                  </a>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hamburger;
