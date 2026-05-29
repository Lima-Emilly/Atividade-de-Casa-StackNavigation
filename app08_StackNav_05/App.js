import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Telas/Principal';
import Tela01 from './src/Telas/Tela01';
import Tela02 from './src/Telas/Tela02';
import Tela03 from './src/Telas/Tela03';
import Tela04 from './src/Telas/Tela04';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Principal"
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen
          name="Principal"
          component={Principal}
        />

        <Stack.Screen
          name="Tela01"
          component={Tela01}
        />

        <Stack.Screen
          name="Tela02"
          component={Tela02}
        />

        <Stack.Screen
          name="Tela03"
          component={Tela03}
        />

        <Stack.Screen
          name="Tela04"
          component={Tela04}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}