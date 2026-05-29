import { View, Text, Button, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { estilosTela } from '../styleSheet/estilos';

export default function Tela04() {

  const nav = useNavigation();

  return (

    <View style={[estilosTela.container, { backgroundColor: '#1b1b1b' }]}>

      <Text style={estilosTela.titulo}>
        Batman
      </Text>

      <Image
        source={require('../img/batman.jpg')}
        style={estilosTela.imagem}
      />

      <Text style={estilosTela.descricao}>
        🦇 Gotham precisa do Batman.
      </Text>

      <Text style={estilosTela.descricao}>
        🎬 Um dos heróis mais famosos do cinema.
      </Text>

      <Text style={estilosTela.descricao}>
        🌃 Conhecido pelo clima sombrio.
      </Text>

      <Button
        title="VOLTAR AO INÍCIO"
        onPress={() => nav.navigate('Principal')}
      />

    </View>
  );
}