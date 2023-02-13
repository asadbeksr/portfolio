import { useEffect, useRef } from 'react';
import { charStagger } from 'utils/animations';

export default function AText({
  text = '',
  variant = 'h1',
  dir = 'up',
  delay = 0,
  font = 'Clash Display',
  fontStyle = 'normal',
  fontWeight = '700',
  outlined = false,
  end = '',
  speed = 1
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
    transition: 'transform .8s',
    fontFamily: font,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    lineHeight: 1,
    color: 'transparent',
    webkitTextFillColor: !outlined
      ? 'white'
      : 'transparent' /* Will override color (regardless of order) */,
    webkitTextStrokeWidth: outlined ? '1px' : 'unset',
    webkitTextStrokeColor: outlined ? 'white' : 'unset',
  };

  return (
    <div
      style={{
        display: 'flex',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        gap: '1.5px',
        textTransform: 'uppercase',
        // height: '100px'
      }}
      data-scroll data-scroll-speed={speed}
    >
      {text.map((char, index) => (
        <div
          key={index}
          className={`${variant}-animated`}
          style={styles}
          ref={(el) => (textRefs.current[index] = el)}
        >
          {char === ' ' ? <span>&nbsp;</span> : char}
          {index + 1 === text.length ? end : ''}
        </div>
      ))}
    </div>
  );
}
