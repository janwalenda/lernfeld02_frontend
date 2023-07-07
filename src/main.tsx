import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from './router.js';
import './styles/index.scss';
import CartProvider from './contexts/CartContext';
import AuthProvider from './contexts/AuthContext';
import ToastProvider from './contexts/ToastContext.js';
import { Toaster } from './components/Toaster.js';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <Toaster />
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>
)
