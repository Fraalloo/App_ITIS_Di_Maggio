import React, {ReactNode} from 'react'
import {TouchableOpacity, StyleSheet, ColorValue, TextStyle} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

interface GradientButtonProps {
    colorList?: [ColorValue, ColorValue, ...ColorValue[]]
    style?: TextStyle
    gradientStyle?: TextStyle
    onPress?: () => void
    activeOpacity?: number 
    vertical?: boolean
    children: ReactNode
}

const GradientButton: React.FC<GradientButtonProps> = ({
    colorList = ["#026bc2", "#17a649"],
    vertical = false,
    style = {},         
    gradientStyle = {},
    children,
    onPress,
    activeOpacity = 0.7,
    ...touchableProps
}) => {
    return (
        <TouchableOpacity
            onPress = {onPress}
            activeOpacity = {activeOpacity}
            style = {style}
            {...touchableProps}
        >
            <LinearGradient
                colors = {colorList}
                start = {{x: 0, y: 0}}
                end = {vertical ? {x: 0, y: 1} : {x: 1, y: 0}}
                style = {[styles.gradient, gradientStyle]}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
})

export default GradientButton