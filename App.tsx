import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from 'expo-font';
import HelloScreen from "./screens/HelloScreen";
import LogInScreen from "./screens/LogInScreen";
import LogInScreenOwner from "./screens/LogInScreenOwner";
import LogInScreenEmployee from "./screens/LogInScreenEmployee";
import SignUpScreenOwner from "./screens/SignUpScreenOwner";
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = Font.useFonts({
    'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HelloScreen" component={HelloScreen} />
          <Stack.Screen name="LogInScreen" component={LogInScreen} />
          <Stack.Screen name="LogInScreenOwner" component={LogInScreenOwner} />
          <Stack.Screen name="LogInScreenEmployee" component={LogInScreenEmployee} />
          <Stack.Screen name="SignUpScreenOwner" component={SignUpScreenOwner} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast
          position='top'
          bottomOffset={20}
      />
    </>
  );
};

export default App;
