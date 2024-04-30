import React, { Component } from "react";
import { ImageBackground, Text,TextInput,TouchableOpacity, View,StyleSheet,SafeAreaView } from "react-native";
export default class Principal extends Component{
    render(){
        return(
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
                <Text style={styles.title}>La ayuda de los granjeros</Text>
                <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Formulario de la granja</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Formulario de las cosechas de la granja</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>base de datos</Text></TouchableOpacity>
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
        color: "white",
        justifyContent: "center",
        alignItems: "center"
    }
});
