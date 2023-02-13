import React from 'react';
import style from './style.module.scss';

export default function SectionTitle({ title = '', num = '00' }) {
  return (
    <div className={style.wrapper}>
      <h1
        className={style.left}
        data-scroll
        data-scroll-delay='0.03'
        data-scroll-speed='3'
        data-scroll-repeat
      >
        {title}
      </h1>
      <h3 className={style.right}>
          <span
            className='c-lerp-block_index'
            data-scroll
            data-scroll-delay='0.03'
            data-scroll-speed='3'
            data-scroll-call='dynamicColor'
            data-scroll-repeat
          >
            {num}
          </span>
      </h3>
    </div>
  );
}
