'use client';

import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/Content/Content.jsx'), {
  ssr: true,
});

export function ClientOnly() {
  return <App />;
}
