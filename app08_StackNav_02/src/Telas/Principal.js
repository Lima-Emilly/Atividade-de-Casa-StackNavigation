import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styleSheet/estilos';

export default function Principal() {

  const nav = useNavigation();

  return (
    <View style={styles.fundo}>

      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>🍔 FoodApp</Text>

        <Image
          source={require('../img/logo.png')}
          style={styles.imagem}
        />
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => nav.navigate('Comidas')}
      >
        <Text style={styles.botaoTexto}>Comidas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => nav.navigate('Sobremesas')}
      >
        <Text style={styles.botaoTexto}>Sobremesas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => nav.navigate('Bebidas')}
      >
        <Text style={styles.botaoTexto}>Bebidas</Text>
      </TouchableOpacity>

    </View>
  );
}