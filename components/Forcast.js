import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props) {
    return (
        <View style={styles.backdrop}>
            <Text style={styles.subtitle}> </Text>
            <Text style={styles.title}>{props.main}</Text>
            <Text style={styles.subtitle}>{props.description}</Text>
            <Text style={styles.subtitle}> </Text>
            <Text style={styles.title}>{props.temp}  °C</Text>
            <Text style={styles.subtitle}>Pressure: {props.pressure}</Text>
            <Text style={styles.subtitle}>Humidity: {props.humidity}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 28,
        color: '#000'
    },
    subtitle: {
        fontSize: 18,
        color: '#000'
    }
});
