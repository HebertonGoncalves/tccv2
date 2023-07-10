import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, View, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ModeloAtividade({navigation}) {

  let chaves = ['M1Q1P1','M1Q1P2','M1Q1P3','M1Q1P4',
                'M1Q2P1','M1Q2P2','M1Q2P3','M1Q2P4',
                'M1Q3P1','M1Q3P2','M1Q3P3','M1Q3P4',
                'M1Q4P1','M1Q4P2','M1Q4P3','M1Q4P4']

  
  const showToast = () => {
    ToastAndroid.show('Atividade já respondida !', ToastAndroid.SHORT);
  };

  const [backgroundColor, setBackgroundColor] = useState("blue");


  const [resultNota, setResultNota] = useState()
  const [resultAtividade, setResultAtividade] = useState()

  const BuscarAtividade = async (chaveAtividade) => {
    try {
      const jsonValue = await AsyncStorage.getItem(chaveAtividade)
      var resultAtividade = jsonValue != null ? JSON.parse(jsonValue) : null;
      setResultAtividade(resultAtividade)
    } catch(e) {
      console.log(e)
    }
  }
  const BuscarNota = async (chaveNota) => {
    try {
      const jsonValue = await AsyncStorage.getItem(chaveNota)
      var resultNota = jsonValue != null ? JSON.parse(jsonValue) : null;
      setResultNota(resultNota)
    } catch(e) {
      console.log(e)
    }
  }

  let nota1
  let nota2
  let nota3
  let nota4
  let notafinal1

  function somaNotas1(){
    BuscarNota(chaves[0])
    nota1 = resultNota
    BuscarNota(chaves[1])
    nota2 = resultNota
    BuscarNota(chaves[2])
    nota3 = resultNota
    BuscarNota(chaves[3])
    nota4 = resultNota
    notafinal1 = nota1+nota2+nota3+nota4
    return notafinal1
  };

  

  function handlePress1() {
    somaNotas1()
  };


    return (
            <SafeAreaView style={styles.container}>
              <SafeAreaView><Text>Ajude o projeto ! compre pelos meus links de afiliado da Amazon !</Text></SafeAreaView>
                <TouchableOpacity  style={styles.cartoes} onPress={() => navigation.navigate("Pergunta211")}>
                    <Text onPress={handlePress1()} style={[styles.marcador, {backgroundColor}]}>{notafinal1}</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questionário 1</Text>
                    <Text style={styles.texto}>Capítulo I</Text>
                    <Text style={styles.texto}>Capítulo II</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.marcador}></Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questionário 2</Text>
                    <Text style={styles.texto}>Capítulo III</Text>
                    <Text style={styles.texto}>Capítulo IV</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.marcador}></Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questionário 3</Text>
                    <Text style={styles.texto}>Capítulo V</Text>
                    <Text style={styles.texto}>Capítulo VI</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.marcador}></Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questionário 4</Text>
                    <Text style={styles.texto}>Capítulo VII</Text>
                    <Text style={styles.texto}>Capítulo VIII</Text>
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