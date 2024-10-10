import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const ChartDashboard = () => {
    const pieData = [
        {
            value: 47,
            color: '#009FFF',
            gradientCenterColor: '#006DFF',
            focused: true,
        },
        { value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE' },
        { value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3' },
        { value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97' },
    ];

    const renderDot = (color: string) => (
        <View style={[styles.dot, { backgroundColor: color }]} />
    );

    const renderLegendComponent = () => (
        <>
            <View style={styles.legendRow}>
                <View style={styles.legendItem}>
                    {renderDot('#006DFF')}
                    <Text style={styles.legendText}>Excellent: 47%</Text>
                </View>
                <View style={styles.legendItem}>
                    {renderDot('#8F80F3')}
                    <Text style={styles.legendText}>Okay: 16%</Text>
                </View>
            </View>
            <View style={styles.legendRow}>
                <View style={styles.legendItem}>
                    {renderDot('#3BE9DE')}
                    <Text style={styles.legendText}>Good: 40%</Text>
                </View>
                <View style={styles.legendItem}>
                    {renderDot('#FF7F97')}
                    <Text style={styles.legendText}>Poor: 3%</Text>
                </View>
            </View>
        </>
    );

    return (
        <View style={styles.container}>
            <View style={styles.chartContainer}>
                <Text style={styles.title}>Performance</Text>
                <View style={styles.chartWrapper}>
                    <PieChart
                        data={pieData}
                        donut
                        showGradient
                        sectionAutoFocus
                        radius={90}
                        innerRadius={60}
                        innerCircleColor={'#232B5D'}
                        centerLabelComponent={() => (
                            <View style={styles.centerLabel}>
                                <Text style={styles.centerLabelText}>47%</Text>
                                <Text style={styles.centerLabelSubtitle}>Excellent</Text>
                            </View>
                        )}
                    />
                </View>
                {renderLegendComponent()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 1,
        backgroundColor: '#34448B',
        flex: 1,
        borderRadius: 20,
    },
    chartContainer: {
        margin: 10,
        padding: 5,
        borderRadius: 20,
        backgroundColor: '#232B5D',
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    chartWrapper: {
        padding: 20,
        alignItems: 'center',
    },
    centerLabel: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerLabelText: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    centerLabelSubtitle: {
        fontSize: 14,
        color: 'white',
    },
    legendRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 120,
        marginRight: 20,
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    legendText: {
        color: 'white',
    },
});

export default ChartDashboard;
