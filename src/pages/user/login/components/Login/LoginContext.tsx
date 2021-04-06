import { createContext } from 'react';
import { LoginContextProps } from './interfaces';

const LoginContext: React.Context<LoginContextProps> = createContext<LoginContextProps>({});

export default LoginContext;
