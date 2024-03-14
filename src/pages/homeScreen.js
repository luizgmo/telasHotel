import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleImagePress = () => {
    navigation.navigate('Pascoa');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.reservas}>RESERVAS</Text>

      <Image
       source={require('../assets/casa.png')}
       style={styles.logo}
      />

      <Text style={styles.pacotes}>PACOTES</Text>

      <View style={styles.fundoBranco}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require('../assets/pascoa.png')}
            style={styles.imgPascoa}
          />
        </TouchableOpacity>
        <Text style={styles.textoPascoa}>PASCOA 2024</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  reservas: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 10,
    marginTop: 50,
    width: '50%',
  },
  logo: {
    marginBottom: 60,
    width: 50,
    height: 50,
    position: 'absolute',
    right: 10,
    marginTop: 50,
  },
  pacotes: {
    color: 'black',
    fontSize: 30,
    margin: 100,
    marginTop: 100,
    width: '50%',
  },
  fundoBranco: {
    backgroundColor: 'white',
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 280,
    left: 50,
    borderRadius: 100,
  },
  imgPascoa: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    left: 50,
  },
  textoPascoa: {
    marginTop: 110,
    marginLeft: 50,
  },
});

export default HomeScreen;
