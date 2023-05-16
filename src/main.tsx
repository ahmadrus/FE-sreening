import GlobalStyle from '@/material/components/globalStyle';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './app/routers';

const container = document.createElement('figure');
document.body.appendChild(container);
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.Suspense fallback={<div className="blank">loading</div>}>
    <GlobalStyle />
    <Routes />
  </React.Suspense>
);
