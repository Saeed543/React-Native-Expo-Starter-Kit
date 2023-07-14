import { View, Text, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

const WellcomeScreen = ({ navigation }) => {
    return (
        <View style={{ alignItems: 'center', padding: 25 }}>
            <Text>Hi</Text>
            <SafeAreaView>
                <Button buttonStyle={styles.button} title='Sign Up' onPress={() => navigation.navigate('SignUpScreen')} />
                <Button buttonStyle={styles.button} title='Login' onPress={() => navigation.navigate('LoginScreen')} />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
        padding: 10
    },
});


export default WellcomeScreen;