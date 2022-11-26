import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from './Animations';

const Hamburger = ({ state }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);

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
                    <Link href='/contact-us'>
                      <a
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line4 = el)}
                      >
                        Contact us
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* <div ref={(el) => (info = el)} className='info'>
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hamburger;
