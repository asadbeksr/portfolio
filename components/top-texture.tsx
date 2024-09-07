export const TopTexture = ({ minusHeight = 30}) => {
  const height = `calc(100vh - ${minusHeight}vh)`;

  return (
    <div className="pattern-div" style={{ height }}>
      <div className='pattern-overlay' />
      <div className='pattern-overlay' />
      <div className='pattern-overlay' />
      <div className='pattern-bg' />
    </div>
  );
};
