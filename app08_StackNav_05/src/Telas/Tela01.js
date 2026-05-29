import { View, Text, Button, Image, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { estilosTela } from '../styleSheet/estilos';

export default function Tela01() {

  const nav = useNavigation();

  const curiosidades = [
    { id: '1', texto: '🌌 Filme dirigido por Christopher Nolan' },
    { id: '2', texto: '🚀 Lançado em 2014' },
    { id: '3', texto: '🪐 Mistura ficção e ciência real' },
  ];

  return (

    <View style={[estilosTela.container, { backgroundColor: '#000814' }]}>

      <Text style={estilosTela.titulo}>
        Interstellar
      </Text>

      <Image
        source={require('../img/interstellar.jpg')}
        style={estilosTela.imagem}
      />

      <FlatList
        data={curiosidades}
        style={estilosTela.lista}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <View style={estilosTela.item}>
            <Text style={estilosTela.itemTexto}>
              {item.texto}
            </Text>
          </View>
        )}
      />

      <View style={estilosTela.botoes}>

        <Button
          title="VOLTAR"
          onPress={() => nav.goBack()}
        />

        <Button
          title="PRÓXIMO"
          onPress={() => nav.navigate('Tela02')}
        />

      </View>

    </View>
  );
}