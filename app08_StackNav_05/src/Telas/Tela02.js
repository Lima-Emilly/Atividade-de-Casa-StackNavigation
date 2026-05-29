import React, { useState } from 'react';

import { View, Text, Button, Image, Switch } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { estilosTela } from '../styleSheet/estilos';

export default function Tela02() {

  const nav = useNavigation();

  const [mostrar, setMostrar] = useState(false);

  return (

    <View style={[estilosTela.container, { backgroundColor: '#003049' }]}>

      <Text style={estilosTela.titulo}>
        Avatar
      </Text>

      <Image
        source={require('../img/avatar.jpg')}
        style={estilosTela.imagem}
      />

      <Text style={estilosTela.descricao}>
        Mostrar curiosidade do filme
      </Text>

      <Switch
        value={mostrar}
        onValueChange={(valor) => setMostrar(valor)}
      />

      {
        mostrar &&
        <Text style={estilosTela.descricao}>
          🌍 Avatar foi um dos filmes mais caros já produzidos.
        </Text>
      }

      <View style={estilosTela.botoes}>

        <Button
          title="VOLTAR"
          onPress={() => nav.goBack()}
        />

        <Button
          title="PRÓXIMO"
          onPress={() => nav.navigate('Tela03')}
        />

      </View>

    </View>
  );
}