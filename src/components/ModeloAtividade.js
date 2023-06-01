import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ModeloAtividade({navigation}) {

  
  const [backgroundColor, setBackgroundColor] = useState('grey');

  const alterarCor = () => {
    setBackgroundColor('green');
  };

  const [result, setResult] = useState(null)

  const Buscar = async (chave) => {
    try {
      const jsonValue = await AsyncStorage.getItem(chave)
      var result = jsonValue != null ? JSON.parse(jsonValue) : null;
      setResult(result)
    } catch(e) {
      console.log(e)
    }
  }


  Buscar('eletq1r')

  function handlePress1() {
    if(result!=4){
    return(
      ()=>navigation.navigate('Pergunta211')
      )
    }else{
      return(
      alterarCor
    )}
  };

    return (
            <SafeAreaView style={styles.container}>
              <SafeAreaView><Text>Ajude o projeto ! compre pelos meus links de afiliado da Amazon !</Text></SafeAreaView>
                <TouchableOpacity  style={styles.cartoes} onPress={handlePress1()}>
                    <Text style={[styles.marcador, {backgroundColor} ]}></Text>
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