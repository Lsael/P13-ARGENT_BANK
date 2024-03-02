import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage'
import SignIn from './pages/SignIn';
import Account from './pages/Account';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to='home' />,
      errorElement: <ErrorPage />,
    },
    {
      path: "home",
      element: <Home />,
      errorElement: <ErrorPage />,
      index: true
    },
    {
      path: "login",
      element: <SignIn />,
      errorElement: <ErrorPage />,
    },
    {
      path: "account",
      element: <Account />,
      errorElement: <ErrorPage />,
    }
  ]);