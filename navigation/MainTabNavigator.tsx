// navigation/MainTabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; // Make sure to import Ionicons
import DashboardScreen from "../screens/DashboardScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

                    if (route.name === "Dashboard") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Settings") {
                        iconName = focused ? "settings" : "settings-outline";
                    }

                    return <Ionicons size={size} color={color} name={iconName} />;
                },
                tabBarActiveTintColor: "#0c4ca3",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
