import App from './pages/App';
import { createBrowserRouter } from "react-router-dom";
import Devices from './pages/Devices';
import Cart from './pages/Cart';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/devices",
    element: <Devices />
  },
  {
    path: "/cart",
    element: <Cart />
  }
]);
