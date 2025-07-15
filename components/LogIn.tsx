import React, {useState} from "react"
import {StyleSheet, Text, TextInput, View} from 'react-native'

import GradientText from "./gradient/GradientText"
import GradientBackground from "./gradient/GradientBackground"
import GradientButton from "./gradient/GradientButton"

interface LogInProps {
    onLogin?: () => void
}

const LogIn: React.FC<LogInProps> = ({onLogin}) => {
    const [user, setUser] = useState<string>("")
    const [pass, setPass] = useState<string>("")

    return (
        <GradientBackground
            colorList = {["#fff", "#e6e5e5"]}
            vertical = {true}
        >
            <View style = {styles.header}>
                <GradientText style = {styles.coloredText}>
                    <Text style = {styles.coloredText}>I.T.E.T</Text>
                    <Text style = {styles.coloredText}>Luigi Di Maggio</Text>
                </GradientText>
                <Text style = {styles.secondaryText}>Sistema presenze mobile</Text>
            </View>
            <View style = {styles.form}>
                <Text style = {styles.label}>Nome Utente</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = "Inserisci Nome Utente"
                    onChangeText = {text => {setUser(text)}}
                />
                <Text style = {styles.label}>Password</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = "Inserisci Password"
                    onChangeText = {text => {setPass(text)}}
                />
                <GradientButton
                    style = {styles.button}
                    onPress = {() => console.log(`Nome: ${user}, password: ${pass}`)}
                >
                    <Text style = {styles.buttonText}>Accedi🚀</Text>
                </GradientButton>
            </View>
        </GradientBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    header: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "column"
    },
    coloredText: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 28
    },
    secondaryText: {
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: 15,
        color: "#64748b"
    },
    form: {
        flex: 2,
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "4%"
    },
    label: {
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#acb0b5',
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 2,
        paddingBottom: 2,
        marginBottom: "5%"
    },
    button: {
        width: "100%"
    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20
    }
})

export default LogIn