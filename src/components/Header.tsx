import React from 'react';
import { color } from './constants/utils';

export default function Header() {
  const checkcolor = 'RED_ME';
  return (
    <div>
      <h1>Header</h1>
      <h6>{color.RED === checkcolor ? 'RED COLOR' : 'NO COLOR DISPLAY'}</h6>
    </div>
  );
}
