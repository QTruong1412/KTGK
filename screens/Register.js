
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    Pressable,
} from "react-native";
import { Icon } from "react-native-paper";
export default function Register() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confimpassword, setConfimpassword] = useState("");
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 ,flexDirection:'row'}}>
                <Pressable onPress={null}>
                    <Text style={{ color: 'blue',textAlign: 'center', fontSize: 50, marginLeft:20,marginRight:600}}>Login </Text>
                </Pressable>
                <Text style={{ textAlign: 'center', fontSize: 50, alignItems: "center",  fontWeight: 'bold' }}>Register</Text>
            </View>
            <View style={styles.containerss}>
                <Image style={styles.image} source={{ uri: "https://assets-global.website-files.com/6047a9e35e5dc54ac86ddd90/6301872109444992761f5874_24979181.png" }} />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="First Name."
                        placeholderTextColor="#003f5c"
                        onChangeText={(user) => setUser(user)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email."
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Confirm Password."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(confimpassword) => setConfimpassword(confimpassword)}
                    />
                </View>

                <Pressable style={styles.loginBtn} onPress={null}>
                    <Text style={styles.loginText}>CREATE ACCOUNT</Text>
                </Pressable>

                <Text style={styles.forgot_button}>Already got an account?
                    <Pressable onPress={null}>
                        <Text style={{ color: 'blue' }}>  Log up </Text>
                    </Pressable>
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fcfcfc",
    },
    containerss: {
        flex: 9,
        backgroundColor: '#9d9696',
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
        width: 250,
        height: 250,
    },
    inputView: {
        backgroundColor: "#f0e1e4",
        borderRadius: 30,
        width: "50%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        width: '95%',
        flex: 1,
        padding: 10,
        marginLeft: 20,
        alignItems: 'left'
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        backgroundColor: "#142dff",
    },
});