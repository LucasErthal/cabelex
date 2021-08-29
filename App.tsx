import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect } from 'react';
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';
import './src/server';

export default function App() {
  
  return (
    <>
      <StatusBar style="auto" />
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </>
  );
}
