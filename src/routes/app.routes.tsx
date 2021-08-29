import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Branchs from '../pages/Branchs';
import Employees from '../pages/Employees';

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen name="Branchs"  component={Branchs} />
      <Screen name="Employees"  component={Employees} />
    </Navigator>
  );
}

export default AppRoutes;