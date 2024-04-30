import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import Inicio from "./screens/inicio";
import Basededatos from "./screens/base_de_datos";
import Cosechasdelasgranjas from "./screens/cosechas_de_las_granjas";
import Granja from "./screens/granja";
import Principal from "./screens/principal";
import Registro from "./screens/registro";

// or any files within the Snack



export default class App extends Component {
  
  render(){
    return <Inicio/>;   
  } 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});