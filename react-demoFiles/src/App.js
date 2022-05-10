import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GetAllRoutes from './routers';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
        <GetAllRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
