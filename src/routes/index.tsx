import React from 'react';
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";
import IsLoading from '../components/LoadingScreen';
import useAuth from "../contexts/auth";

function Routes() {
  const { logged, loading } = useAuth();

  if(loading) {
    return <IsLoading />
  }

  return (
    <NavigationContainer>
      { logged? <AppRoutes/> : <AuthRoutes/> }
     {/* <AppRoutes/> */}
     {/* <AuthRoutes/> */}
    </NavigationContainer>
  );
}

export default Routes;