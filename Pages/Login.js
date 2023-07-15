import React from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth();

const LoginScreen = ({ navigation }) => {
  const [Email, SetEmail] = React.useState('');
  const [Password, SetPassword] = React.useState('');
  const [value, setValue] = React.useState('');

  async function LoginUser() {
    if (Email === '' || Password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, Email, Password);
    } catch (error) {
      console.log(error)
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
      <Text>Please Continue by Logging in here:</Text>

      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={(Email) => SetEmail(Email)}

        />
        <TextInput
          style={styles.input}
          onChangeText={(Password) => SetPassword(Password)}
          placeholder="Password"
        />
      </SafeAreaView>
      <Button
        title='Sign In'
        style={styles.button}
        onPress={LoginUser}
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
    marginBottom: 10,
    padding: 10
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },
});

export default LoginScreen;