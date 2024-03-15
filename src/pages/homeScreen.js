import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const DATA = [
  {
    "id": 1,
    "nome": "Páscoa",
    "url da imagem": "https://www.fashionbubbles.com/wp-content/uploads/2022/04/domingo-pascoa.jpg"
  },
  {
    "id": 2,
    "nome": "Independência",
    "url da imagem": "https://img2.migalhas.com.br/_MEDPROC_/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__2022__SL__07__SL__28__SL__cropped_kgjjhnyd.u01.jpg._PROC_CP75CCH31622400.jpg"
  },
  {
    "id": 3,
    "nome": "Dia das Mães",
    "url da imagem": "https://www.fashionbubbles.com/wp-content/uploads/2023/03/dia-das-maes-origem-capa.jpg"
  },
  {
    "id": 4,
    "nome": "Natal",
    "url da imagem": "https://super.abril.com.br/wp-content/uploads/2017/12/a-verdadeira-histc3b3ria-de-natal.png?w=720&h=440&crop=1"
  },
  {
    "id": 5,
    "nome": "Carnaval",
    "url da imagem": "https://cdls.org.br/wp-content/uploads/cdlce_base/2024/01/Carnaval.png"
  }
];

const Item = ({nome, imageUrl, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.item}>
      <Image source={{uri: imageUrl}} style={styles.imagemFlat} />
      <Text style={styles.nome}>{nome}</Text>
    </View>
  </TouchableOpacity>
);

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
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item 
              nome={item.nome}
              imageUrl={item["url da imagem"]}
              onPress={() => navigation.navigate('Pascoa')} />)}
          keyExtractor={item => item.id}
          horizontal={true}
        />
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
    height: '25%',
    position: 'absolute',
    top: 280,
    left: 50,
    borderRadius: 50,
    elevation: 10,
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
  item: {
    padding: 10,
    width: 200,
    height: '70%',
    borderRadius: 10,
    margin: 15,
    top: 10,
    alignItems: 'center',
  },
  nome: {
    fontSize: 20,
  },
  imagemFlat: {
    width: 150, 
    height: 120,
    resizeMode: 'cover',
    borderRadius: 100,
  },
});

export default HomeScreen;
