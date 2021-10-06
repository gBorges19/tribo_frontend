import React, { createContext, useCallback, useState, useContext } from 'react';

import {fakeUsersData} from '../assets/fakeData'

import {IUser as User} from '../dtos/IUser'

interface FakeUsersContextData {
  fakeUsers: User[];
  addUser(user:User):Promise<void>;
}

const FakeUsersContext = createContext<FakeUsersContextData>({} as FakeUsersContextData);

const FakeUsersProvider: React.FC = ({ children }) => {
  const [fakeUsers, setFakeUsers] = useState<User[]>(fakeUsersData);
  
  const addUser = useCallback(async (data:User):Promise<void> => {

    setFakeUsers([...fakeUsers,data]);
    console.log("fakeUsers:",fakeUsers)


  }, [setFakeUsers,fakeUsers]);


  return (
    <FakeUsersContext.Provider
      value={{ fakeUsers, addUser }}
    >
      {children}
    </FakeUsersContext.Provider>
  );
};

function useFakeUsers(): FakeUsersContextData {
  const context = useContext(FakeUsersContext);

  if (!context) {
    throw new Error('useFakeUsers must be used within an AuthProvider');
  }

  return context;
}

export { FakeUsersProvider, useFakeUsers };
