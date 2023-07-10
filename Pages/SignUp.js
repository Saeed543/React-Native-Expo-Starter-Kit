import React, { useContext, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Button } from 'react-native';
import { auth } from 'firebase/auth';


const SignUpScreen = () => {

    return (
        <View style={{
            alignItems: 'center',
            padding: 10,
        }}>
            <Text>Hello! 👋</Text>
            <Text>Please Continue by signing in here:</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    placeholder='First Name'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                />
            </SafeAreaView>

            <Button
                title='hi'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
    },
});

export default SignUpScreen;