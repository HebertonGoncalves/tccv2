import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { useState } from 'react';
import TelaIntroducao from './src/screens/TelaIntroducao';
import ModeloConteudos from './src/components/ModeloConteudos'
import * as Progress from 'react-native-progress';
import ModeloAtividade from './src/components/ModeloAtividade';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pergunta211 from './src/components/Perguntas/Pergunta211';
import Notas from './src/components/Notas';


function HomeScreen({ navigation}) {

    const [prog1, setProg1] = useState(null)
    const [prog2, setProg2] = useState(null)
    const [prog3, setProg3] = useState(null)
    const [prog4, setProg4] = useState(null)

    const Armazenar = async (chave, valor) => {
      try {
        const jsonValue = JSON.stringify(valor)
        await AsyncStorage.setItem(chave, jsonValue)
      } catch (e) {
        console.log(e)
      }
    }

    const Buscar = async (chave) => {
      try {
        const jsonValue = await AsyncStorage.getItem(chave)
        var prog = jsonValue != null ? JSON.parse(jsonValue) : null;
        if(chave=='11'){setProg1(prog)}
        else if(chave=='12'){setProg2(prog)}
        else if(chave=='13'){setProg3(prog)}
        else{setProg4(prog)}
        
      } catch(e) {
        console.log(e)
      }
    }
    Buscar('11')
    Buscar('12')
    Buscar('13')
    Buscar('14')


var progresso = ((prog1+prog2+prog3+prog4)/4)
var progressoPorcent = progresso*100

  return (
    <SafeAreaView style={styles.container1}>
      <Text style={styles.bemvindo}>Bem vindo!</Text>
      <Text style={styles.progresso}>Progresso: {progressoPorcent}%</Text>
      <Progress.Bar progress={progresso} width={200} height={20} color='#0353a4' marginLeft= {10} />
      
      <SafeAreaView style={styles.container2}>
      <Text style={styles.bemvindo}>O que vamos aprender hoje?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("ModeloConteudos")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Eletricidade</Text>
        <Progress.Bar progress={prog1} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ModeloConteudos")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Eletrônica</Text>
        <Progress.Bar progress={prog2} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ModeloConteudos")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Pneumática</Text>
        <Progress.Bar progress={prog3} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Notas")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>CLPs</Text>
        <Progress.Bar progress={prog4} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#012a4a',
    padding: 20,
  },
  container2: {
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap',
    backgroundColor: '#012a4a',
    padding: 20,
    alignContent: 'center'
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  bemvindo: {
    color: '#fff',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    textDecorationStyle: "solid",
    marginLeft: 10,
  },
  progresso: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    textDecorationStyle: "solid",
  },
  cartoes: { 
    backgroundColor: '#001233',
    width: 150, 
    height: 150, 
    position: "relative", 
    justifyContent: "center", 
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
  textoCartoes: { 
    fontSize: 20, 
    color: '#fff',
    marginBottom: 5
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Aprenda Automação" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="TelaIntroducao" component={TelaIntroducao} />   
        <Stack.Screen name="ModeloConteudos" component={ModeloConteudos} />
        <Stack.Screen name="ModeloAtividade" component={ModeloAtividade} />
        <Stack.Screen name="Pergunta211" component={Pergunta211}/>
        <Stack.Screen name="Notas" component={Notas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;