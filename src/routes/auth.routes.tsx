import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';

const { Navigator, Screen } = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen name="Login"  component={Login} />
    </Navigator>
  );
}

export default AuthRoutes;