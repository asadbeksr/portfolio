import React from 'react';

import style from './style.module.scss';

export default function SectionTitle({ title = '', num = '00' }) {
  return (
    <div className={style.wrapper}>
      <h1 className={style.left}>{title}</h1>
      <h3 className={style.right}>{num}</h3>
    </div>
  );
}
