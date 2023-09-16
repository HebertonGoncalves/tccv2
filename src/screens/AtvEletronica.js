import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, View, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AtvEletronica({navigation}) {

  let nota1, nota2, nota3, nota4;

  const [resultNota1, setResultNota1] = useState()
  const [resultNota2, setResultNota2] = useState()
  const [resultNota3, setResultNota3] = useState()
  const [resultNota4, setResultNota4] = useState()

  const BuscarNota1 = async (chaveNota) => {
    try {
      const jsonValue = await AsyncStorage.getItem(chaveNota)
      var resultNota1 = jsonValue != null ? JSON.parse(jsonValue) : null;
      setResultNota1(resultNota1)
    } catch(e) {
      console.log(e)
    }
  }
  const BuscarNota2 = async (chaveNota) => {
    try {
      const jsonValue = await AsyncStorage.getItem(chaveNota)
      var resultNota2 = jsonValue != null ? JSON.parse(jsonValue) : null;
      setResultNota2(resultNota2)
    } catch(e) {
      console.log(e)
    }
  }
  const BuscarNota3 = async (chaveNota) => {
    try {
      const jsonValue = await AsyncStorage.getItem(chaveNota)
      var resultNota3 = jsonValue != null ? JSON.parse(jsonValue) : null;
      setResultNota3(resultNota3)
    } catch(e) {
      console.log(e)
    }
  }
  const BuscarNota4 = async (chaveNota) => {
    try {
      const jsonValue = await AsyncStorage.getItem(chaveNota)
      var resultNota4 = jsonValue != null ? JSON.parse(jsonValue) : null;
      setResultNota4(resultNota4)
    } catch(e) {
      console.log(e)
    }
  }

  function somaNotas1() {
    BuscarNota1('M2Q1')
     nota1 = resultNota1
    return nota1
}
function somaNotas2() {
    BuscarNota2('M2Q2')
     nota2 = resultNota2
    return nota2
}
function somaNotas3() {
    BuscarNota3('M2Q3')
     nota3 = resultNota3
    return nota3
}
function somaNotas4() {
    BuscarNota4('M2Q4')
     nota4 = resultNota4
    return nota4
}

const Armazenar = async (chave, valor) => {
  try {
    const jsonValue = JSON.stringify(valor)
    await AsyncStorage.setItem(chave, jsonValue)
  } catch (e) {
    console.log(e)
  }
}
function somaNotasTotal(){
  let total = (somaNotas1()+somaNotas2()+somaNotas3()+somaNotas4())/40;
  Armazenar('M2P', total)
}

somaNotasTotal()
  
    return (
            <SafeAreaView style={styles.container}>
              <SafeAreaView></SafeAreaView>
                <TouchableOpacity  style={styles.cartoes} onPress={() => navigation.navigate("Atividade 1 - Eletronica")}>
                    <Text style={[styles.marcador]}>{somaNotas1()}</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questionário 1</Text>
                    <Text style={styles.texto}>Capítulo I</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes} onPress={() => navigation.navigate("Atividade 2 - Eletronica")}>
                    <Text style={styles.marcador}>{somaNotas2()}</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questionário 2</Text>
                    <Text style={styles.texto}>Capítulo II</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes} onPress={() => navigation.navigate("Atividade 3 - Eletronica")}>
                    <Text style={styles.marcador}>{somaNotas3()}</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questionário 3</Text>
                    <Text style={styles.texto}>Capítulo III</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes} onPress={() => navigation.navigate("Atividade 4 - Eletronica")}>
                    <Text style={styles.marcador}>{somaNotas4()}</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questionário 4</Text>
                    <Text style={styles.texto}>Capítulo IV</Text>
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
  marcador:{
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
  },
  pontos:{
    height: 50,
    marginTop:20,
    fontWeight:'bold',
    fontSize:20
  },
  resposta:{
    marginTop:5,
    fontSize: 20, 
    color: '#2dc653',
    fontWeight:'bold',
  }
})