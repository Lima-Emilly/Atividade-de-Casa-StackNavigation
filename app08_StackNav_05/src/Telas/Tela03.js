import React, { useState } from 'react';

import { View, Text, Button, Image } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native';

import { estilosTela } from '../styleSheet/estilos';

export default function Tela03() {

  const nav = useNavigation();

  const [heroi, setHeroi] = useState('Homem de Ferro');

  return (

    <View style={[estilosTela.container, { backgroundColor: '#6a040f' }]}>

      <Text style={estilosTela.titulo}>
        Vingadores
      </Text>

      <Image
        source={require('../img/vingadores.jpg')}
        style={estilosTela.imagem}
      />

      <Picker
        selectedValue={heroi}
        onValueChange={(itemValue) => setHeroi(itemValue)}
        style={{
          width: '100%',
          backgroundColor: '#fff',
        }}
      >

        <Picker.Item label="Homem de Ferro" value="Homem de Ferro" />
        <Picker.Item label="Thor" value="Thor" />
        <Picker.Item label="Hulk" value="Hulk" />

      </Picker>

      <Text style={estilosTela.descricao}>
        Herói escolhido: {heroi}
      </Text>

      <View style={estilosTela.botoes}>

        <Button
          title="VOLTAR"
          onPress={() => nav.goBack()}
        />

        <Button
          title="PRÓXIMO"
          onPress={() => nav.navigate('Tela04')}
        />

      </View>

    </View>
  );
}