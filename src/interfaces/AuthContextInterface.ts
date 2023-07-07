import { LoginResponse } from './LoginResponse';

export interface AuthContextInterface {
  user: LoginResponse | null;
  loggedIn: boolean;
  login: (params: FormData) => void;
  logout: () => void;
  register: (registerParams: FormData) => void;
  loginMode: boolean;
  toggleLoginMode: () => void;
  getAuthPath: () => string;
  getToken: () => string | null;
  getUserData: () => LoginResponse | undefined;
}
