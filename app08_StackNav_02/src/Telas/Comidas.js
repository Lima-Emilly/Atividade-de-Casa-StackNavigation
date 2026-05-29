import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import { styles } from '../styleSheet/estilos';

export default function Comidas() {

  const comidas = [
    {
      id: '1',
      nome: 'Feijoada',
      imagem: require('../img/feijoada.jpg')
    },

    {
      id: '2',
      nome: 'Hambúrguer',
      imagem: require('../img/hamburguer.jpg')
    },
  ];

  return (
    <View style={styles.fundo}>

      <FlatList
        data={comidas}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View style={styles.itemLista}>

            <Image
              source={item.imagem}
              style={styles.imagemLista}
            />

            <Text style={styles.textoItem}>
              {item.nome}
            </Text>

          </View>
        )}
      />

    </View>
  );
}