import React from 'react';

export default function Hr({ offset = 100, repeat = false, origin = 'left'}) {
  return <hr className={`c-header_line ${origin}`} data-scroll data-scroll-repeat={repeat}  data-scroll-offset={offset} />;
}
