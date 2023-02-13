import React from 'react';
import WordToLetter from '../../../utils/WordToLetter.jsx';

import style from './style.module.scss';

export default function SectionTitle({ title = '', num = '00' }) {
  return (
    <div className={style.wrapper}>
      <h1
        className={style.left}
        data-scroll
        data-scroll-delay='0.03'
        data-scroll-speed='1'
      >
        {/* {<WordToLetter word={title} speed={6} dir='vertical' />} */}
        {title}
      </h1>
      <h3 className={style.right}>
        {/* <div className='c-lerp-block'> */}
          <span
            className='c-lerp-block_index'
            data-scroll
            data-scroll-delay='0.03'
            data-scroll-speed='1'
            data-scroll-call='dynamicColor'
            data-scroll-repeat
          >
            {num}
          </span>
        {/* </div> */}
      </h3>
    </div>
  );
}
