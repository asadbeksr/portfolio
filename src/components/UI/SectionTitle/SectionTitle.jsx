import React from 'react';
import WordToLetter  from '../../../utils/WordToLetter.jsx';

import style from './style.module.scss';

export default function SectionTitle({ title = '', num = '00' }) {
  return (
    <div className={style.wrapper}>
      <h1 className={style.left}>
        {<WordToLetter word={title} speed={2} dir='vertical' />}
      </h1>
      <h3 className={style.right}>{num}</h3>
    </div>
  );
}
