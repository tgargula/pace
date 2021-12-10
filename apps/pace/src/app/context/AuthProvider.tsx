import { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type User = null | {};
interface AuthContextValue {
  user: User;
  login: () => void;
  logout: () => void;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({});
  };
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
