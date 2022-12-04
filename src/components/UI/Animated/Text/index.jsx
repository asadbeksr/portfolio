import { Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { charStagger } from 'utils/animations';

export default function AText({
  text = '',
  variant = 'h1',
  dir = 'up',
  delay = 0,
}) {
  text = text.split('');
  let textRefs = useRef([]);

  useEffect(() => {
    charStagger(textRefs.current, delay);
  }, []);

  const directions = () => {
    switch (dir) {
      case 'up':
        return 'translateY(115px)';
      case 'down':
        return 'translateY(-115px)';
      default:
        return 'translateY(115px)';
    }
  };

  const styles = {
    transform: directions(),
    transition: 'transform .5s',
  };

  return (
    <div
      style={{
        display: 'flex',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        textTransform: 'uppercase',
      }}
    >
      {text.map((char, index) => (
        <Typography
          key={index}
          variant={variant}
          style={styles}
          ref={(el) => (textRefs.current[index] = el)}
        >
          {char === ' ' ? <span>&nbsp;</span> : char}
        </Typography>
      ))}
    </div>
  );
}
