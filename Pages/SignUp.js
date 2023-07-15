import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Alert } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Button } from "react-native-elements";

const auth = getAuth();

const SignUpScreen = () => {
    const [Password, SetPassword] = React.useState("");
    const [ConfirmPassword, SetConfirmPassword] = React.useState("");
    const [Email, SetEmail] = React.useState("");
    const [FirstName, LastName] = React.useState("");
    const [value, setValue] = React.useState("");

    async function Signupuser() {
        if (Email === '' || Password === '') {
            setValue({
                ...value,
                error: 'Email and password are mandatory.'
            })
            return;
        }
        if (Email === '' || ConfirmPassword === '') {
            setValue({
                ...value,
                error: 'Please enter confirm password to continue.'
            })
            return;
        }
        if (Password != ConfirmPassword) {
            Alert.alert('Error', 'Password does not match')

            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, Email, ConfirmPassword);
        } catch (error) {
            setValue({
                ...value,
                error: error.message,
            })

        };
    };

    return (
        <View style={{
            alignItems: 'center',
            padding: 10,
        }}>
            <Text>Hello! 👋</Text>
            <Text>Please Continue by signing up here:</Text>

            {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

            <SafeAreaView>
                <TextInput

                    style={styles.input}
                    placeholder='First Name'
                    onChangeText={(Name) => FirstName(Name)}

                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    onChangeText={(Name) => LastName(Name)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(Email) => SetEmail(Email)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(Password) => SetPassword(Password)}
                    secureTextEntry={true}

                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    onChangeText={(Password) => SetConfirmPassword(Password)}
                    secureTextEntry={true}

                />
            </SafeAreaView>

            <Button
                title='Sign Up'
                buttonStyle={styles.button}
                onPress={Signupuser}
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
    button: {
        marginBottom: 100,
        padding: 10
    },
    error: {
        marginTop: 10,
        padding: 10,
        color: '#fff',
        backgroundColor: '#D54826FF',
    },
});

export default SignUpScreen;