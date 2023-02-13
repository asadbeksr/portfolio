import React from 'react';

export default function Hr({ offset = 100 }) {
  return <hr class='c-header_line' data-scroll data-scroll-offset={offset} />;
}
