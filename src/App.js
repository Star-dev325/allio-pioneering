import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import router from './router';

function App() {

  // Set the initial theme for app when it's loaded.
  useEffect(() => {
    document.body.setAttribute("data-theme", "light-theme");
  }, []);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
