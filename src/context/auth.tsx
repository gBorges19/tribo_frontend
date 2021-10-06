import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';

import {useFakeUsers} from './fakeusers'
import {IUser as User} from '../dtos/IUser'
import { useHistory } from 'react-router-dom';

interface AuthData {
  token: string;
  user: User;
}
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
  getLoggedUser(): Promise<User>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


const AuthProvider: React.FC = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>(() => {
      const token = localStorage.getItem('@MulasDaTribo:token');
      const user = localStorage.getItem('@MulasDaTribo:user');
  
      if (token && user) {
  
        return { token, user: JSON.parse(user) };
      }
  
      return {} as AuthData;
    });

  const {fakeUsers} = useFakeUsers();
 
  const history = useHistory();

  const signIn = useCallback(async ({ email, password }):Promise<void> => {

    const logginUser = fakeUsers.filter((user)=>(user.email === email && user.password === password))

    if(logginUser.length){
      const token = 'xxx';
      const user = logginUser[0];
      console.log(user);

      localStorage.setItem('@MulasDaTribo:token', token);
      localStorage.setItem('@MulasDaTribo:user', JSON.stringify(user));
      setAuthData({ token, user });
      history.push('/minhaconta')
    }else{
      alert("Deu ruim!")
    }


  }, [fakeUsers]);

  const getLoggedUser = useCallback(async ():Promise<User> => {

    return authData.user;

  }, [fakeUsers]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@MulasDaTribo:token');
    localStorage.removeItem('@MulasDaTribo:user');

    setAuthData({} as AuthData);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@MulasDaTribo:user', JSON.stringify(user));

      setAuthData({
        token: authData.token,
        user,
      });
    },
    [setAuthData, authData.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: authData.user, signIn, signOut, updateUser,getLoggedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
