import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <ImageBackground 
      source={{ uri: 'https://www.housedigest.com/img/gallery/how-to-make-custom-wallpaper-using-old-book-pages/l-intro-1660552487.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      
      <View style={styles.container}>
        <Text style={styles.text}>LibroMania</Text>
        <Text style={styles.text}>Ecommerce Book Shop</Text>
        <Link href="/about" style={styles.button}>
          Books To Display
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: 50,
    marginBottom: 10,
  },
  button: {
    fontSize: 30,
    textDecorationLine: 'underline',
    color: 'aqua',
    marginTop: 20,
  },
});
