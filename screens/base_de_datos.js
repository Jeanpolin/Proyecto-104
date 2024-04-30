import React, { Component } from "react";
import { ImageBackground, Text,TextInput,TouchableOpacity, View,StyleSheet,SafeAreaView } from "react-native";
export default class Basededatos extends Component{
    render(){
        return(
            <View>
                <Text>La ayuda de los granjeros</Text>
                <Text>Base de datos</Text>
                <TouchableOpacity><Text>Datos formulario granja con Excel</Text></TouchableOpacity>
                <TouchableOpacity><Text>Datos formulario granja cosechada con Excel</Text></TouchableOpacity>
                <TouchableOpacity><Text>Calculo final de cosechas por cada cultivo por Excel</Text></TouchableOpacity>
                <TouchableOpacity><Text>Formulario de la granja</Text></TouchableOpacity>
                <TouchableOpacity><Text>Formulario de las cosechas de la granja</Text></TouchableOpacity>
                <TouchableOpacity><Text>base de datos</Text></TouchableOpacity>
            </View>

        )
    }
}