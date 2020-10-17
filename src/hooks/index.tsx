/* eslint-disable react/prop-types */
import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
// import ToastContainer from '../components/ToastContainer';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      {children}
      {/* <ToastContainer /> */}
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
