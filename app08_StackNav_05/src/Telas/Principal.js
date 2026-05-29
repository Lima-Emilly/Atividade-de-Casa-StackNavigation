import { View, Text, Button, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { estilosPrincipal } from '../styleSheet/estilos';

export default function Principal() {

  const nav = useNavigation();

  return (

    <View style={estilosPrincipal.container}>

      <Text style={estilosPrincipal.titulo}>
        FILMES🎥
      </Text>

      <Image
        source={require('../img/cinema.jpg')}
        style={estilosPrincipal.imagem}
      />

      <Text style={estilosPrincipal.nomeApp}>
        CINEVERSE
      </Text>

      <Button
        title="ENTRAR"
        onPress={() => nav.navigate('Tela01')}
        color="#ffcc00"
      />

      <Text style={estilosPrincipal.rodape}>
        Emilly Pires - 2026
      </Text>

    </View>
  );
}