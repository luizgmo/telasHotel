import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ModeloScreen = ({navigation, route}) => {
  const handleImagePress = () => {
    navigation.navigate('Home');
  };

  const { item } = route.params;

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: item["url da imagem"] }}
        style={styles.imgModelo}
      />

      <TouchableOpacity onPress={handleImagePress}>
        <Image
        source={require('../assets/casa.png')}
        style={styles.logo}
        />
      </TouchableOpacity>

      <View style={styles.conteudo}>
        <Text style={styles.textoModelo}>{item.nome}</Text>

        <Text style={styles.textoDesc}>{item.desc1}</Text>

        <View style={styles.fundoAzul}>
          <Image
          source={{ uri: item["img1"] }}
          style={styles.imgModelo1}
          />
          <Image
          source={{ uri: item["img2"] }}
          style={styles.imgModelo2}
          />
        </View>

        <Text style={styles.textoDesc2}>{item.desc2}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    position: 'absolute',
    marginTop: 50,
    backgroundColor: 'white',
  },
  imgModelo: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    top: 50,
  },
  textoModelo: {
    fontSize: 30,
    textAlign: 'center',
  },
  textoDesc: {
    fontSize: 12,
    padding: 20,
  },
  fundoAzul: {
    backgroundColor: 'lightblue',
    width: '100%',
    height: 100,
    left: 50,
    borderRadius: 100,
  },
  imgModelo1: {
    width: '30%',
    height: 80,
    position: 'absolute',
    left: 40,
    top: 10,
    borderColor: 'black',
    borderWidth: 3,
  },
  imgModelo2: {
    width: '30%',
    height: 80,
    position: 'absolute',
    top: 10,
    left: 200,
    borderColor: 'black',
    borderWidth: 3,
  },
  textoDesc2: {
    fontSize: 12,
    padding: 20,
    marginBottom: 20,
  },
  conteudo: {
    backgroundColor: 'white',
    width: '100%',
    height: '70%',
    position: 'absolute',
    padding: 10,
    bottom: 0,
  }
});

export default ModeloScreen;
