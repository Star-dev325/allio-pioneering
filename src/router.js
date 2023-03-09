import React from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

import TopBar from './components/TopBar';
import LeftSide from './components/LeftSide';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

export default createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <TopBar title='Pioneering Programmers Test App' />
        <div className='content'>
          <LeftSide />
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        index: true,
        element: <Navigate to='page1' />
      },
      {
        path: 'page1',
        element: <Page1 />
      },
      {
        path: 'page2',
        element: <Page2 />
      }
    ]
  }
]);