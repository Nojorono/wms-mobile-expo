import * as React from "react";
import { Text, StyleSheet, View, Dimensions, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import ButtonFill from "../components/ButtonFill";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import SigninForm from "../components/forms/signin/SigninForm";
import ChartDashboard from "../components/ChartDashboard";

// Get screen width and height for dynamic styling
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// type DashboardScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "DashboardScreen">;
// Sample order data
const orders: OrderItem[] = [
    { id: '1', item: 'IN Product A', quantity: 2, price: 20.0 },
    { id: '2', item: 'IN Product B', quantity: 1, price: 15.0 },
    { id: '3', item: 'IN Product C', quantity: 5, price: 30.0 },
    { id: '4', item: 'IN Product D', quantity: 3, price: 25.0 },
    { id: '5', item: 'IN Product D', quantity: 3, price: 25.0 },
    { id: '6', item: 'IN Product D', quantity: 3, price: 25.0 },
    { id: '7', item: 'IN Product D', quantity: 3, price: 25.0 },
];

interface OrderItem {
    id: string;
    item: string;
    quantity: number;
    price: number;
}


const DashboardScreen = () => {
    // const navigation = useNavigation<DashboardScreenNavigationProp>();
    const renderOrderItem = ({ item }: { item: OrderItem }) => (
        <TouchableOpacity
            style={styles.orderItem}
            onPress={() => handlePress(item)} // Handle press event
        >
            <View style={styles.gridContainer}>
                <Text>#{item.id}</Text>
                <View style={styles.grid1}>
                    <Image
                        style={styles.logo}
                        contentFit="cover"
                        source={require("../assets/icon-box.svg")}
                    />
                </View>
                <View style={styles.grid2}>
                    <Text style={styles.itemText}>{item.item}</Text>
                    <Text style={styles.itemText}>Quantity: {item.quantity}</Text>
                    <Text style={styles.itemText}>Price: ${item.price.toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const handlePress = (item: OrderItem) => {
        // Handle the button press event
        console.log("Pressed item:", item);
        // You can navigate to a detail page or show a modal, etc.
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <ChartDashboard />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Order List</Text>
                <FlatList
                    data={orders}
                    renderItem={renderOrderItem}
                    keyExtractor={item => item.id}
                    style={styles.orderList}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#fff", paddingHorizontal: SCREEN_WIDTH * 0.02, // Responsive padding
        paddingVertical: SCREEN_HEIGHT * 0.01,
    },
    logo: {
        width: SCREEN_WIDTH * 0.1,
        height: SCREEN_WIDTH * 0.1,
        // marginBottom: SCREEN_HEIGHT * 0.05,
    },
    appTitle: {
        fontSize: FontSize.ptMedium1_size,
        color: Color.navy,
        textAlign: "center",
        fontFamily: FontFamily.ptMedium,
        fontWeight: "600",
        marginBottom: SCREEN_HEIGHT * 0.03,
    },
    mainImage: {
        width: SCREEN_WIDTH * 0.6,
        height: SCREEN_HEIGHT * 0.12,
        marginBottom: SCREEN_HEIGHT * 0.17,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 1,
        textAlign: 'left',
    },
    orderList: {
        marginTop: 10,
    },
    orderItem: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
        marginVertical: 8,
        elevation: 1, // Adds shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    itemText: {
        fontSize: 16,
        color: "#333",
    },
    gridContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    grid1: {
        flex: 1, // This will take 1 part of the available space
        alignItems: 'center', // Center the content horizontally
    },
    grid2: {
        flex: 2, // This will take 2 parts of the available space
        paddingLeft: 16, // Add some space between the image and text
    },
});

export default DashboardScreen;
