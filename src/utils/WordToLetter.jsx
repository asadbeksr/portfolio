import React from 'react';

export default function WordToLetter({word = "Word", speed = 2, dir = "vertical"}) {
  const delay = (0.05 + 0.01 * word.length).toFixed(2);
  const letters = word.split('');

  return (
    <div style={{ display: 'flex', gap: '2px'}}>
      {letters.map((letter, index) => (
        <span
          data-scroll
          data-scroll-direction={dir}
          data-scroll-delay={delay - 0.01 * index}
          data-scroll-speed={speed}
          key={letter}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
