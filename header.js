import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

const Header = () => (
  <View style={styles.header}>
    <Svg height="50" width="100%">
      <Defs>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#026B2C" />
          <Stop offset="100%" stopColor="#17A649" />
        </LinearGradient>
      </Defs>
      <SvgText
        x="0"
        y="30"
        fill="url(#gradient)"
        fontSize="28"
        fontWeight="bold"
        textAnchor="start"
      >
        Luigi Di Maggio
      </SvgText>
    </Svg>
    <Text style={styles.subtitleText}>Sistema Presenze</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  subtitleText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'left',
    marginTop: 0,
  },
});

export default Header;