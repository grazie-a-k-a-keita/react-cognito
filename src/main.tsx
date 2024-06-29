import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './components/Layout.tsx';
import { ProvideAuth } from './hooks/useAuth.tsx';
import './index.css';
import { Dashboard, SignIn, Top } from './pages/index.ts';
import PrivateRoute from './routes/PrivateRoute.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<div>Error</div>}>
      <Route path='/' element={<Top />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route
        path='/dashboard'
        element={<PrivateRoute children={<Dashboard />} />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProvideAuth>
      <RouterProvider router={router} />
    </ProvideAuth>
  </React.StrictMode>
);
