import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, Image, View, TouchableHighlight, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ModeloAtividade({navigation}) {

  const [botaoDesabilitado, setBotaoDesabilitado] = useState(false);
  const [respondida, setRespondida] = useState('');
  const handlePress = () => {
    setBotaoDesabilitado(false);
    setRespondida('Respondida');
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
        Buscar('1')

    return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity  style={styles.cartoes} onPress={handlePress} onPressIn={()=>navigation.navigate('Pergunta211')} disabled={botaoDesabilitado}>
                    <Text style={styles.nota}>2.5</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questão 1</Text>
                    <Text style={styles.texto}>Qual a unidade de medida da corrente ?</Text>
                    <Text style={styles.resposta}>{respondida}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.nota}>2.5</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questão 2</Text>
                    <Text style={styles.texto}>Qual a unidade de medida da tensão ?</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.nota}>2.5</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questão 3</Text>
                    <Text style={styles.texto}>Qual a unidade de medida da resistencia ?</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.nota}>2.5</Text>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={styles.titulo}>Questão 4</Text>
                    <Text style={styles.texto}>Qual a unidade de medida da potencia ?</Text>
                  </View>
                </TouchableOpacity>
                <View><Text style={styles.pontos} >Pontuação: {result} pontos</Text></View>
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