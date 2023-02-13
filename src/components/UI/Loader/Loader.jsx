import React from 'react';

export default function Loader({ end }) {
  return (
    <div className={`loader ${end ? 'loaded' : ''}`}>
      <h1 className='h1-animated'>Loading</h1>
    </div>
  );
}
