import React, { useState } from 'react';
import { View } from 'react-native';
import * as Linking from 'expo-linking';
import { useCameraPermissions } from 'expo-camera';

import Header from './components/header';
import QRCard from './components/QRcard';
import ScannerCamera from './components/ScannerCamera';
import styles from './components/styles';

export default function QRScannerPage() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleBarcodeScanned = async ({ data }) => {
    setScanned(true);
    if (isValidUrl(data)) {
      try {
        const canOpen = await Linking.canOpenURL(data);
        if (canOpen) {
          await Linking.openURL(data);
        }
      } catch (error) {
        //console.log('errore:', error);
      }
    } else {
      console.log('dati:', data);
    }
    setTimeout(() => {
      setScanned(false);
      setShowCamera(false);
    }, 2000);
  };

  const startScanning = async () => {
    if (!permission?.granted) {
      await requestPermission();
    }
    if (permission?.granted) {
      setShowCamera(true);
      setScanned(false);
    }
  };

  if (showCamera) {
    return <ScannerCamera scanned={scanned} onScan={handleBarcodeScanned} onClose={() => setShowCamera(false)} />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <QRCard onStartScanning={startScanning} />
      </View>
    </View>
  );
}