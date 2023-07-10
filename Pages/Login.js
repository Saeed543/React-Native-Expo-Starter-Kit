import React from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';



const LoginScreen = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={{
      alignItems: 'center',
      padding: 10,
    }}>
      <Text>Hello! 👋</Text>
      <Text>Please Continue by Logging in here:</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder='Email'
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
          keyboardType="numeric"
        />
      </SafeAreaView>
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

export default LoginScreen;