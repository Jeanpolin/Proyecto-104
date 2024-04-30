import React, { Component } from "react";
import { Text,TextInput,TouchableOpacity, View } from "react-native-web";
export default class Granja extends Component{
    render(){
        return(
            <View>
                <Text>La ayuda de los granjeros</Text>
                <Text>Formulario de la granja</Text>
                <TextInput placeholder={"Número de cultivos"}/>
                <TextInput placeholder={"Alimento que se siembra en cada cultivo"}/>
                <TouchableOpacity><Text>Formulario de la granja</Text></TouchableOpacity>
                <TouchableOpacity><Text>Formulario de las cosechas de la granja</Text></TouchableOpacity>
                <TouchableOpacity><Text>base de datos</Text></TouchableOpacity>
            </View>

        )
    }
}