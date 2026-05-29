import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { styles } from '../styleSheet/estilos';

export default function Bebidas() {

  const [bebida, setBebida] = useState('Suco');

  function retornaImagem() {

    if (bebida === 'Suco') {
      return require('../img/suco.jpg');
    }

    if (bebida === 'Café') {
      return require('../img/cafe.jpg');
    }

    if (bebida === 'Milkshake') {
      return require('../img/milkshake.jpg');
    }

    return require('../img/refrigerante.jpg');
  }

  return (
    <View style={styles.fundo}>

      <Picker
        selectedValue={bebida}
        onValueChange={(itemValue) => setBebida(itemValue)}
        style={styles.picker}
      >

        <Picker.Item label="Suco" value="Suco" />
        <Picker.Item label="Refrigerante" value="Refrigerante" />
        <Picker.Item label="Café" value="Café" />
        <Picker.Item label="Milkshake" value="Milkshake" />

      </Picker>

      <View style={{ alignItems: 'center' }}>

        <Image
          source={retornaImagem()}
          style={styles.imagemLista}
        />

        <Text style={{
          fontSize: 24,
          marginTop: 20
        }}>
          🥤 {bebida}
        </Text>

      </View>

    </View>
  );
}