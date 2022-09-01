import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from "tailwindcss-react-native";
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { store } from './store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }}>
          <TailwindProvider>
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              
            </Stack.Navigator>
          </TailwindProvider>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

