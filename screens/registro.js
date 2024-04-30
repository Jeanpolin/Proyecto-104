import React, { Component } from "react";
import { ImageBackground, Text,TextInput,TouchableOpacity, View,StyleSheet,SafeAreaView } from "react-native";
export default class Registro extends Component{
        render(){
            return(
                <View style={styles.container}>
                <Text style={styles.title}>registro</Text>

                <TextInput placeholder="Nombre del granjero"/>
                <TextInput placeholder="¿Qué se siembra en su granja?"/>
                <TextInput placeholder="¿De qué país y ciudad es la granja?"/>
                <TextInput placeholder="Usuario"/>
                <TextInput placeholder="Contraseña"/>
                <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Enviar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Borrar</Text></TouchableOpacity>
            </View>
            )
        }
    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "blue"
    },
    buttontext:{
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    }
});