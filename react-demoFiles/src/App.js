import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GetAllRoutes from './routers';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GetAllRoutes />
    </BrowserRouter>
  );
}

export default App;
