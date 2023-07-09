/* eslint-disable @typescript-eslint/no-explicit-any */
import {FC, createContext, useContext, useState} from 'react';
import {LoginResponse} from '../interfaces/LoginResponse';
import { API } from '../classes/API';
import {useLocalStorage} from '../hooks/useLocalStorage';
import { ToastContext } from './ToastContext';
import { ToastContextInterface } from '../interfaces/ToastContextInterface';
import { ToastType } from '../types/ToastType';
import { AuthContextInterface } from '../interfaces/AuthContextInterface';

export const AuthContext = createContext<AuthContextInterface | null>(null);

const AuthProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const token = API.getToken();
  const [userData, setUserData] = useState<LoginResponse | null>(null);
  const {setItem, removeItem, getItem} = useLocalStorage();
  const [loggedIn, setLoggedIn] = useState(!!token);
  const [loginMode, setLoginMode] = useState<boolean>(true);
  const toast = useContext(ToastContext) as ToastContextInterface;

  const api = new API();

  function login(params: FormData) {
    api.login(params).then(userInfo => {
      setItem('user', JSON.stringify(userInfo));
      setLoggedIn(true);
    }).catch((err: Error) => {
      toast.saveToast({
        title: 'ERROR',
        description: err.message,
        type: ToastType.ERROR
      });
    });
  }

  function register(params: FormData) {
    api.register(params)
    .catch((err: Error) => {
      toast.saveToast({
        title: 'ERROR',
        description: err.message,
        type: ToastType.ERROR
      });
      console.log(err);
    }) 
    .finally(() => {
      toggleLoginMode();
    })
  }

  function logout() {
    setUserData(null);
    removeItem('user');
    removeItem('cart');
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

  function getUserData(){
    const user = getItem('user');
    if(typeof user === 'string') {
      const parsed = JSON.parse(user) as LoginResponse;
      return parsed;
    } else {
      logout();
    }
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
      value={{
        user: userData, 
        loggedIn: loggedIn, 
        login, 
        logout, 
        getToken, 
        loginMode, 
        toggleLoginMode, 
        getAuthPath, 
        register,
        getUserData,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
