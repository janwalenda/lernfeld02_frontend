import App from './pages/App';
import { createBrowserRouter } from "react-router-dom";
import Workspace from './pages/Workspace';
import Login from './pages/Login';
import Register from './pages/Register';

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
  }
]);
