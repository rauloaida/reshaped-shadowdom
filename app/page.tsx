'use client'

import { useEffect } from 'react';
import ShadowComponent from './shadowComponent';

export default function IndexPage() {
  useEffect(() => {
    import('./shadowWrapper');
  }, []);

  return (
    <div>
      <shadow-wrapper></shadow-wrapper>
      <ShadowComponent />
    </div>
  );
}
