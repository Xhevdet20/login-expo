import React from 'react';

import { Colors } from '../components/styles';
const {primary, tertiary} = Colors;

// React navigation
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/Login';
import Signup from './../screens/Signup'
import Welcome from './../screens/Welcome';


const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent'
                },
                headerTintColor : tertiary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
            }}
            initialRouteName='Login'

        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen options={{headerTintColor: primary}} name="Welcome" component={Welcome} />
        </Stack.Navigator>
    )
}

export default RootStack;