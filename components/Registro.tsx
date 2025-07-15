import React, {useState} from "react"
import {StyleSheet, Text, TextInput, View} from 'react-native'

import GradientText from "./gradient/GradientText"
import GradientBackground from "./gradient/GradientBackground"
import GradientButton from "./gradient/GradientButton"

const LogIn: React.FC = () => {
    const [user, setUser] = useState<string>("")
    const [pass, setPass] = useState<string>("")

    return (
        <GradientBackground
            colorList = {["#fff", "#e6e5e5"]}
            vertical = {true}
        >
            <Text>Registro</Text>
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