export const TopTexture = ({ minusHeight = 14}) => {
  const height = `calc(100vh - ${minusHeight}rem)`;

  return (
    <div className="pattern-div" style={{ height }}>
      <div className='pattern-overlay' />
      <div className='pattern-overlay' />
      <div className='pattern-overlay' />
      <div className='pattern-bg' />
    </div>
  );
};
