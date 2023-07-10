import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import MyStack from '../Navigation';
import RootNavigation from '../Navigation';

const Homepage = () => {

    return (
        <View style={styles.input}>
            <Button
                title="Press to schedule a notification"
                onPress={async () => {
                    await schedulePushNotification();
                }}
            />
            <Button
                title='Stop!'
                onPress={Notifications.cancelAllScheduledNotificationsAsync}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        padding: 10,
    },
});

export default Homepage;
