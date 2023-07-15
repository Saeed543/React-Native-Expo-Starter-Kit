import { Text, View, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthentication } from "../hooks/loginhook";

const handleSignOut = () => {
    signOut(auth)
        .catch((error) => {
            // Handle sign out error
            console.log("Sign out error:", error);
        });
};

const Homepage = ({ navigation }) => {
    const { user } = useAuthentication(); // Destructure the user object from the hook

    return (
        <View style={styles.input} >

            <Text>Hello, {user?.email} </Text>
            <SafeAreaView>
                <Button
                    buttonStyle={styles.button}
                    title='SignOut'
                    onPress={handleSignOut}
                />
                <Button
                    buttonStyle={styles.button}
                    title='Notification Page'
                    onPress={() => navigation.navigate('Notification Page')}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        marginBottom: 10,
    },
    button: {
        marginBottom: 10,
        padding: 10
    },
});

export default Homepage;
