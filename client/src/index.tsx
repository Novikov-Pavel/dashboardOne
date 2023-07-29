import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import route from './route';
import App from './App';

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <Routes>
        <Route path={route.main} element={<App />} />
      </Routes>
    </BrowserRouter>
  )