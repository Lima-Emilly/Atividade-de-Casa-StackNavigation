import React, { useState } from 'react';
import { View, Text, Switch, Image } from 'react-native';

import { styles } from '../styleSheet/estilos';

export default function Sobremesas() {

  const [ativo, setAtivo] = useState(false);

  return (
    <View style={styles.fundo}>

      <View style={styles.switchArea}>

        <Text style={{ fontSize: 18 }}>
          Mostrar sobremesa favorita
        </Text>

        <Switch
          value={ativo}
          onValueChange={(valor) => setAtivo(valor)}
        />

      </View>

      {
        ativo &&
        <View style={{ alignItems: 'center' }}>

          <Image
            source={require('../img/brigadeiro.jpg')}
            style={styles.imagemLista}
          />

          <Text style={{
            fontSize: 28,
            marginTop: 20
          }}>
            🍫 Brigadeiro
          </Text>

        </View>
      }

    </View>
  );
}