import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HelloScreen from "./screens/HelloScreen";
import LogInScreen from "./screens/LogInScreen";
import LogInScreenOwner from "./screens/LogInScreenOwner";
import LogInScreenEmployee from "./screens/LogInScreenEmployee";
import SignUpScreenOwner from "./screens/SignUpScreenOwner";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HelloScreen" component={HelloScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="LogInScreenOwner" component={LogInScreenOwner} />
        <Stack.Screen name="LogInScreenEmployee" component={LogInScreenEmployee} />
        <Stack.Screen name="SignUpScreenOwner" component={SignUpScreenOwner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
