import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useAuthentication } from '../hooks/loginhook';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

const NotificationListenerFeature = () => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const { user } = useAuthentication();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    return (
        <View style={styles.input}>
            <Text>Your expo push token: {expoPushToken}</Text>
            <Text>Hello, {user?.email} </Text>

            <SafeAreaView>
                <Button
                    buttonStyle={styles.button}
                    title="Press to schedule a notification"
                    onPress={async () => {
                        await schedulePushNotification();
                    }}
                />
                <Button
                    buttonStyle={styles.button}
                    title='Stop!'
                    onPress={Notifications.cancelAllScheduledNotificationsAsync}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
    },
    button: {
        marginBottom: 10,
        padding: 10
    },
});

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "You've got mail! 📬",
            body: 'Here is the notification body',
            data: { data: 'goes here' },
        },
        trigger: {
            seconds: 1,
            repeats: true
        },

    });
}

async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}

export default NotificationListenerFeature;
