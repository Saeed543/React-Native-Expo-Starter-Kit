import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../Pages/SignUp';
import LoginScreen from '../Pages/Login';
import WellcomeScreen from '../Pages/Wellcome';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WellcomeScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'SignUp' }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{title: 'Login'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
