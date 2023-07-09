import App from './pages/App';
import { createBrowserRouter } from "react-router-dom";
import Workspace from './pages/Workspace';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/workspace",
    element: <Workspace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/checkout',
    element: <Checkout />
  }
]);
