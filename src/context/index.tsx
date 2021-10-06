import React from 'react';

import { AuthProvider } from './auth';
import { FakeUsersProvider } from './fakeusers';


const AppProvider: React.FC = ({ children }) => {
  return (
      <FakeUsersProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </FakeUsersProvider>
  );
};

export default AppProvider;
