import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from "../Pages/Home";
import NotificationListenerFeature from '../Pages/notifications';

const Stack = createStackNavigator();

export default function UserStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Homepage} />
                <Stack.Screen name="Notification Page" component={NotificationListenerFeature} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}