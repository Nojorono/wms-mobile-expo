import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, Button } from "react-native";

const Tab = createMaterialTopTabNavigator();

function InboundScreen() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
                <Text>Transportation</Text>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
                <Text>Scan Item</Text>
            </View>
        </View>

    );
}

function OutboundScreen() {
    return (
        <View>
            <Text>Settings Screen</Text>
        </View>
    );
}

export default function OrderScreen() {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Inbound" component={InboundScreen} />
                <Tab.Screen name="Outbound" component={OutboundScreen} />
            </Tab.Navigator>
        </>
    );
}
