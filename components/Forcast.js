import React from "react";
import { Text, View } from "react-native";

export default function Forecast(props) {
    return (
        <View>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text>{props.temp}  °C</Text>
            <Text>Pressure: {props.pressure}</Text>
            <Text>Humidity: {props.humidity}</Text>
        </View>
    );
}
