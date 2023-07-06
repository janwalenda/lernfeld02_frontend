/* eslint-disable @typescript-eslint/no-explicit-any */
import {FC, createContext, useContext, useState} from 'react';
import {LoginResponse} from '../interfaces/LoginResponse';
import { API } from '../classes/API';
import {useLocalStorage} from '../hooks/useLocalStorage';
import { ToastContext } from './ToastContext';
import { ToastContextType } from '../interfaces/ToastContextType';
import { ToastType } from '../types/ToastType';
import { AuthContextInterface } from '../interfaces/AuthContextInterface';

export const AuthContext = createContext<AuthContextInterface | null>(null);

const AuthProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const token = API.getToken();
  const [userData, setUserData] = useState<LoginResponse | null>(null);
  const {setItem, removeItem} = useLocalStorage();
  const [loggedIn, setLoggedIn] = useState(!!token);
  const [loginMode, setLoginMode] = useState<boolean>(true);
  const toast = useContext(ToastContext) as ToastContextType;

  const api = new API();

  async function login(params: FormData) {
    try {
      const userInfo = await api.login(params);
      await setItem('user', JSON.stringify(userInfo));

    } catch (err: any) {
      toast.saveToast({
        title: 'ERROR',
        description: err.message,
        type: ToastType.ERROR
      });
    }
  }

  async function register(params: FormData) {
    try {
      await api.register(params);
      toggleLoginMode();
    } catch (err: any) {
      toast.saveToast({
        title: 'ERROR',
        description: err.message,
        type: ToastType.ERROR
      })
    }
  }

  function logout() {
    setUserData(null);
    removeItem('user');
    setLoggedIn(false);
  }

  function getToken() {
    const token = API.getToken();
    setLoggedIn(!!token);
    return token;
  }

  function toggleLoginMode() {
    setLoginMode(!loginMode);
  }

  function getAuthPath() {
    if (loginMode) {
      return '/login';
    } else {
      return '/register';
    }
  }

  return (
    <AuthContext.Provider
      value={{user: userData, loggedIn: loggedIn, login, logout, getToken, loginMode, toggleLoginMode, getAuthPath, register}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
