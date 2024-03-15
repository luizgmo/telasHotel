import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const DATA = [
  {
    "id": 1,
    "nome": "Páscoa",
    "url da imagem": "https://www.fashionbubbles.com/wp-content/uploads/2022/04/domingo-pascoa.jpg",
    "desc1": "Venha curtir a Páscoa aqui com a família no Hotel Estância Barra Bonita, venha procurar os ovos que o Coelhinho deixou na nossa FLORESTA ENCANTADA e aproveitar muito com toda a família.",
    "desc2": "Os chalés do Hotel Estância Barra Bonita estão localizados em alamedas arborizadas, formando vilas entre jardins e bosques. O Resort tem aproximadamente 2.000 árvores. A primeira coisa...",
    "img1": "https://images.contentstack.io/v3/assets/blt312bfd9a3caf2bfc/blt022075bd3b8d03ff/642c5ec4b2ef0d11ece9eff4/pexels-roman-odintsov-6897433.jpg?auto=webp&format=pjpg&quality=80&width=900&height=500&fit=crop",
    "img2": "https://pubimg.band.uol.com.br/files/cbf4a4a7c9dba32b9465.webp",
  },
  {
    "id": 2,
    "nome": "Independência",
    "url da imagem": "https://img2.migalhas.com.br/_MEDPROC_/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__2022__SL__07__SL__28__SL__cropped_kgjjhnyd.u01.jpg._PROC_CP75CCH31622400.jpg",
    "desc1": "A Independência do Brasil foi o processo histórico de separação entre o então Reino do Brasil e o Reino de Portugal e Algarves, que ocorreu no período de 1821 a 1825, colocando em violenta oposição as duas partes.",
    "desc2": "O Brasil foi um país muito importante para o mundo, mas também muito influente, pois era um dos principais produtores de alimentos e produtos de uso doméstico.",
    "img1": "https://educasc.com.br/wp-content/uploads/2023/09/iStock-1504472983-scaled.webp",
    "img2": "https://static.todamateria.com.br/upload/in/de/independenciabrasil0011024x6431024x585-cke.jpg",
  },
  {
    "id": 3,
    "nome": "Dia das Mães",
    "url da imagem": "https://www.fashionbubbles.com/wp-content/uploads/2023/03/dia-das-maes-origem-capa.jpg",
    "desc1": "Dia das Mães ou Dia da Mãe é uma data comemorativa que homenageia anualmente a figura familiar materna e a maternidade. A data de comemoração varia de acordo com o país. Em Portugal e nos PALOP é comemorado no primeiro domingo do mês de maio e no Brasil no segundo domingo do mês de maio.", 
    "desc2": "A festividade surgiu nos Estados Unidos, com a iniciativa da ativista Ann Maria Reeves Jarvis, que fundou em 1858 os Mothers Days Works Clubs com o objetivo de diminuir a mortalidade de crianças em famílias de trabalhadores.",
    "img1": "https://blog.cresol.com.br/wp-content/uploads/2023/05/mae-avo-e-filha.jpg",
    "img2": "https://nsc-total-wp.s3.sa-east-1.amazonaws.com/wp-content/uploads/legacy/s3fs-public/graphql-upload-files/dia%20das%20maes%203.jpg",
  },
  {
    "id": 4,
    "nome": "Natal",
    "url da imagem": "https://super.abril.com.br/wp-content/uploads/2017/12/a-verdadeira-histc3b3ria-de-natal.png?w=720&h=440&crop=1",
    "desc1": "Natal ou Dia de Natal é um feriado e festival religioso cristão comemorado anualmente em 25 de dezembro (nos países eslavos e ortodoxos, cujos calendários eram baseados no calendário juliano, é comemorado no dia 7 de janeiro).",
    "desc2": "Os historiadores não sabem com precisão quando o Natal surgiu, embora exista uma teoria que aponte o papa Júlio I como criador dessa festividade. Acredita-se que, em algum momento, entre os séculos II d. C. e IV d. C. é quando começou a convencionar-se a comemoração do nascimento de Jesus Cristo no dia 25 de dezembro.",
    "img1": "https://segredosdomundo.r7.com/wp-content/uploads/2017/12/destaque-42.jpg",
    "img2": "https://s2-redeglobo.glbimg.com/9w4gh2SEk0C9vYBGju52sWnBn8I=/0x0:3375x1900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2023/4/r/UmpkIFRTGFXslPX3Glzg/capa-materias-site-3-.jpg",
  },
  {
    "id": 5,
    "nome": "Carnaval",
    "url da imagem": "https://cdls.org.br/wp-content/uploads/cdlce_base/2024/01/Carnaval.png",
    "desc1": "Carnaval é um festival do cristianismo ocidental que ocorre antes da estação litúrgica da Quaresma. Os principais eventos ocorrem tipicamente durante fevereiro ou início de março, durante o período historicamente conhecido como Tempo da Septuagésima.",
    "desc2": "O carnis levale, conhecido também como carne vale, surgiu como um período para as pessoas extravasarem seus desejos antes de iniciarem a Quaresma. A expressão significa “retirar a carne” e representa o Carnaval exatamente como o momento de preparação para que os prazeres carnais fossem retirados.",
    "img1": "https://campinafm.com.br/wp-content/uploads/2024/01/CANVA-CARNAVAL.jpg",
    "img2": "https://uploads.metropoles.com/wp-content/uploads/2020/02/22153710/WhatsApp-Image-2020-02-22-at-15.32.36-1.jpeg",
  }
];

const Item = ({ nome, imageUrl, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.item}>
      <Image source={{ uri: imageUrl }} style={styles.imagemFlat} />
      <Text style={styles.nome}>{nome}</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
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
          renderItem={({ item }) => (
            <Item
              nome={item.nome}
              imageUrl={item["url da imagem"]}
              onPress={() => navigation.navigate('Modelo', { item })}
            />
          )}
          keyExtractor={item => item.id.toString()}
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
