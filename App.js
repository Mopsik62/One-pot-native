import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubstancesScreen from './screens/SubstancesScreen';
import SubstanceScreen from './screens/SubstanceScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Субстанции" component={SubstancesScreen} />
        <Stack.Screen name="Субстанция" component={SubstanceScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
