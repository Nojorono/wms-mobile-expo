// // navigation/MainTabNavigator.tsx
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from '@expo/vector-icons'; // Make sure to import Ionicons
// import DashboardScreen from "../screens/DashboardScreen";
// import SettingsScreen from "../screens/SettingsScreen";
// import OrderScreen from "../screens/OrderScreen";


// const Tab = createBottomTabNavigator();

// const MainTabNavigator = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

//                     if (route.name === "Dashboard") {
//                         iconName = focused ? "home" : "home-outline";
//                     } else if (route.name === "Order") {
//                         iconName = focused ? "paper-plane" : "paper-plane-outline";
//                     } else if (route.name === "Settings") {
//                         iconName = focused ? "settings" : "settings-outline";
//                     }

//                     return <Ionicons size={size} color={color} name={iconName} />;
//                 },
//                 tabBarActiveTintColor: "#0c4ca3",
//                 tabBarInactiveTintColor: "gray",
//             })}
//         >
//             <Tab.Screen name="Dashboard" component={DashboardScreen} />
//             <Tab.Screen name="Order" component={OrderScreen} />
//             <Tab.Screen name="Settings" component={SettingsScreen} />

//         </Tab.Navigator>
//     );
// };

// export default MainTabNavigator;

// navigation/MainTabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import DashboardScreen from "../screens/DashboardScreen";
import SettingsScreen from "../screens/SettingsScreen";
import OrderScreen from "../screens/OrderScreen";
import { View, TouchableWithoutFeedback } from "react-native";
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabBarButton: React.FC<BottomTabBarButtonProps> = (props) => {
    const { children, onPress, accessibilityState } = props;

    // Ensure accessibilityState is defined
    const focused = accessibilityState?.selected ?? false;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{
                borderTopWidth: focused ? 1 : 0,
                borderColor: '#0c4ca3',
                paddingVertical: 0,
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
            }}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
};

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

                    if (route.name === "Dashboard") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Order") {
                        iconName = focused ? "paper-plane" : "paper-plane-outline";
                    } else if (route.name === "Settings") {
                        iconName = focused ? "settings" : "settings-outline";
                    }

                    return <Ionicons size={size} color={color} name={iconName} />;
                },
                tabBarActiveTintColor: "#0c4ca3",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    paddingBottom: 5,
                },
            })}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    tabBarButton: (props) => <TabBarButton {...props} />,
                }}
            />
            <Tab.Screen
                name="Order"
                component={OrderScreen}
                options={{
                    tabBarButton: (props) => <TabBarButton {...props} />,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarButton: (props) => <TabBarButton {...props} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;

