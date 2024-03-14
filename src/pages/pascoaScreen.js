import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PascoaScreen = ({navigation}) => {
  const handleImagePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/pascoa.png')}
        style={styles.imgPascoa}
      />

      <TouchableOpacity onPress={handleImagePress}>
        <Image
        source={require('../assets/casa.png')}
        style={styles.logo}
        />
      </TouchableOpacity>

      <View style={styles.conteudo}>
        <Text style={styles.textoPascoa}>PASCOA 2024</Text>

        <Text style={styles.textoDesc}>Venha curtir a Páscoa aqui com a família no Hotel Estância Barra Bonita, venha procurar os ovos que o Coelhinho deixou na nossa FLORESTA ENCANTADA e aproveitar muito com toda a família.</Text>

        <View style={styles.fundoAzul}>
          <Image
          source={require('../assets/floresta1.jpg')}
          style={styles.imgFloresta1}
          />
          <Image
          source={require('../assets/floresta2.jpg')}
          style={styles.imgFloresta2}
          />
        </View>

        <Text style={styles.textoDesc2}>Os chalés do Hotel Estância Barra Bonita estão localizados em alamedas arborizadas, formando vilas entre jardins e bosques. O Resort tem aproximadamente 2.000 árvores. A primeira coisa...</Text>
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
  imgPascoa: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    top: 50,
  },
  textoPascoa: {
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
  imgFloresta1: {
    width: '30%',
    height: 80,
    position: 'absolute',
    left: 40,
    top: 10,
    borderColor: 'black',
    borderWidth: 3,
  },
  imgFloresta2: {
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

export default PascoaScreen;
