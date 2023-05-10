import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, Image, View, TouchableHighlight, Linking } from 'react-native';


export default function ModeloAtividade({navigation}) {

    return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.nota}>2.5</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questão 1</Text>
                    <Text style={styles.texto}>Qual a unidade de medida da corrente ?</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.nota}>2.5</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questão 2</Text>
                    <Text style={styles.texto}>Qual a unidade de medida da corrente ?</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.nota}>2.5</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questão 3</Text>
                    <Text style={styles.texto}>Qual a unidade de medida da corrente ?</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.nota}>2.5</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questão 4</Text>
                    <Text style={styles.texto}>Qual a unidade de medida da corrente ?</Text>
                  </View>
                </TouchableOpacity>
            </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  cartoes: {
    width: 350, 
    height: 100, 
    position: "relative", 
    backgroundColor: "#ffffff",
    borderBottomWidth:0.5,
    padding: 10,
    flexDirection:'row'
  },
  nota:{
    width:40,
    height:30,
    backgroundColor:'grey',
    marginRight:10,
    textAlign: "center",
    fontWeight: "bold",
    color:'white',
  },
  texto:{
    position: 'relative',
    alignContent: "center",
    fontSize: 12,
  },
  titulo:{
    position: 'relative',
    alignContent: "center",
    fontWeight:'bold',
    fontSize: 15,
  }
})