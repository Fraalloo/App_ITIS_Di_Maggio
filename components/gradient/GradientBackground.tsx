import React, {ReactNode} from 'react'
import {ColorValue, StyleSheet, TextStyle} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

interface GradientButtonProps {
    colorList?: [ColorValue, ColorValue, ...ColorValue[]]
    style?: TextStyle
    vertical?: boolean
    children: ReactNode
}

const GradientBackground: React.FC<GradientButtonProps> = ({
    colorList = ['#4c669f', '#3b5998', '#192f6a'],
    vertical = false,
    style = {},
    children
}) => {
    return (
        <LinearGradient
            colors = {colorList}
            start = {{x: 0, y: 0}}
            end = {vertical ? {x: 0, y: 1} : {x: 1, y: 0}}
            style = {[styles.container, style, StyleSheet.absoluteFillObject]}
        >
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default GradientBackground