import { useEffect, useRef } from 'react';
export default function Cursor() {
  const dot = useRef(null);
  const dotOutLine = useRef(null);

  const delay = 7;

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);

  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOver);
    document.addEventListener('mouseup', mouseOut);
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOver);
      document.removeEventListener('mouseup', mouseOut);
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);

      cancelAnimationFrame(requestRef.current);
    };
  }, );

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutLine.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutLine.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutLine.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutLine.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  const mouseOver = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOut = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnter = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeave = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMove = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutLine.current.style.top = _y.current + 'px';
    dotOutLine.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={dotOutLine} className='cursor-dot-outline' />
      <div ref={dot} className='' />
    </>
  );
}
