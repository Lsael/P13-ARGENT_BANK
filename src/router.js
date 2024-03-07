import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage'
import SignIn from './pages/SignIn';
import Account from './pages/Account';
import App from './App';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "login",
          element: <SignIn />,
        },
        {
          path: "account",
          element: <Account />,
        }
      ]
    },
  ]);