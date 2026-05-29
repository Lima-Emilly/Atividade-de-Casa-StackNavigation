import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Telas/Principal';
import Comidas from './src/Telas/Comidas';
import Sobremesas from './src/Telas/Sobremesas';
import Bebidas from './src/Telas/Bebidas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Stack.Navigator initialRouteName="Principal">

        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: 'FoodApp',
            headerStyle: { backgroundColor: '#ff6600' },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Comidas"
          component={Comidas}
          options={{
            title: 'Comidas',
            headerStyle: { backgroundColor: '#cc3300' },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Sobremesas"
          component={Sobremesas}
          options={{
            title: 'Sobremesas',
            headerStyle: { backgroundColor: '#ff3399' },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Bebidas"
          component={Bebidas}
          options={{
            title: 'Bebidas',
            headerStyle: { backgroundColor: '#0099cc' },
            headerTintColor: '#fff',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}