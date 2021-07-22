
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

// React navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  );
}

