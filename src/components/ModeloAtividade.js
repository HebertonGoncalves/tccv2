import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, Image, View, TouchableHighlight, Linking } from 'react-native';
import Atividade from './Atividade';

export default function ModeloAtividade({navigation}) {

    return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.cartoes} onPress={() => navigation.navigate("Atividade")}><Text>Pergunta 1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}><Text>Pergunta 1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}><Text>Pergunta 1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}><Text>Pergunta 1</Text></TouchableOpacity>
            </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  cartoes: {
    width: 350, 
    height: 80, 
    position: "relative", 
    justifyContent: "center", 
    alignItems: "center",
    borderRadius: 1,
    backgroundColor: "#5c677d",
    borderBottomWidth:1,
  },
})