import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import PasswordReset from './routes/PasswordReset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
  {
    path: '/password-reset',
    element: <PasswordReset />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
