import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage'
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
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
          path: "profile",
          element: <Profile />,
        }
      ]
    },
  ]);