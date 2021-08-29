import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext, useContext, useState } from 'react';

interface AuthContextData {
  logged: boolean;
  id: string | null;
  login: string | null;
  logIn(login: string, password: string): Promise<any>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [id, setId] = useState<string | null>(null);
  const [login, setLogin] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function logIn(login: string, password: string) {
    const a = await new Promise( resolve => setTimeout(async () => {
      if (login == '0' && password == '0') {
        setLoading(true);
        setId('0');
        setLogin(login);
        setLoading(false)
        
        resolve(true)
      } else {
        resolve(false)
      }
    }, 1000)
    )
    
    return a;
  }

  return (
    <AuthContext.Provider value={{
      logged: !!id,
      id,
      login,
      logIn,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}