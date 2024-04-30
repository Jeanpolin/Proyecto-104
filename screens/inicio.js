import React, { Component } from "react";
import { ImageBackground, Text,TextInput,TouchableOpacity, View,StyleSheet,SafeAreaView } from "react-native";
export default class Inicio extends Component{
    render(){
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <Text style={styles.title}>Bienvenido a la ayuda de los granjeros</Text>
            <TextInput placeholder={"Usuario"}/>
            <TextInput placeholder={"Contraseña"}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>registrarse</Text>
            </TouchableOpacity>
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
        alignItems: "center",
        marginLeft:30,
        marginRight:30
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