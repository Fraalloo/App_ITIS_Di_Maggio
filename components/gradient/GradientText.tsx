import React, {ReactNode} from 'react'
import {View, Text, StyleSheet, TextStyle, ColorValue} from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import {LinearGradient} from 'expo-linear-gradient'

interface GradientTextProps {
    colorList?: [ColorValue, ColorValue, ...ColorValue[]]
    style?: TextStyle
    vertical?: boolean
    children: ReactNode
}

const GradientText: React.FC<GradientTextProps> = ({
    colorList = ["#026bc2", "#17a649"],
    style = {},
    vertical = false,
    children
}) => {
    const renderLines = (textStyle: TextStyle): ReactNode => (
        React.Children.map(children, (child: ReactNode): ReactNode => {
            if(typeof child === 'string' || typeof child === 'number') return <Text style={[textStyle, style]}>{child}</Text>

            if(React.isValidElement(child)) {
                const el = child as React.ReactElement<{children?: React.ReactNode}>
                return <Text style={[textStyle, style]}>{el.props.children}</Text>
            }
            
            return null
        })
    )

    return (
        <MaskedView maskElement={
            <View style = {styles.center}>
                {renderLines(styles.maskedText)}
            </View>
        }>
            <LinearGradient
                colors = {colorList}
                start = {{x: 0, y: 0}}
                end = {vertical ? {x: 0, y: 1} : {x: 1, y: 0}}
            >
                <View style = {styles.center}>
                    {renderLines(styles.hiddenText)}
                </View>
            </LinearGradient>
        </MaskedView>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    maskedText: {
        fontWeight: 'bold',
    },
    hiddenText: {
        opacity: 0,
        fontWeight: 'bold',
    },
})

export default GradientText