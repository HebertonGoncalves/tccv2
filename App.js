import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import { useState } from 'react';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModeloAtividade from './src/components/ModeloAtividade';
import Perguntas11 from './src/components/Perguntas/Perguntas11';
import Perguntas12 from './src/components/Perguntas/Perguntas12';
import Perguntas13 from './src/components/Perguntas/Perguntas13';
import Perguntas14 from './src/components/Perguntas/Perguntas14';
import Perguntas21 from './src/components/Perguntas/Perguntas21';
import Perguntas22 from './src/components/Perguntas/Perguntas22';
import Perguntas23 from './src/components/Perguntas/Perguntas23';
import Perguntas24 from './src/components/Perguntas/Perguntas24';
import Perguntas31 from './src/components/Perguntas/Perguntas31';
import Perguntas32 from './src/components/Perguntas/Perguntas32';
import Perguntas33 from './src/components/Perguntas/Perguntas33';
import Perguntas34 from './src/components/Perguntas/Perguntas34';
import Perguntas41 from './src/components/Perguntas/Perguntas41';
import Perguntas42 from './src/components/Perguntas/Perguntas42';
import Perguntas43 from './src/components/Perguntas/Perguntas43';
import Perguntas44 from './src/components/Perguntas/Perguntas44';
import Eletricidade from './src/screens/Eletricidade';
import AtvEletricidade from './src/screens/AtvEletricidade';
import Eletronica from './src/screens/Eletronica';
import AtvEletronica from './src/screens/AtvEletronica';
import CLPs from './src/screens/CLPs';
import AtvClps from './src/screens/AtvClps';
import Pneumatica from './src/screens/Pneumatica';
import AtvPneumatica from './src/screens/AtvPneumatica';


function HomeScreen({ navigation}) {

    let progresso1, progresso2, progresso3, progresso4;

    let chaves = ['M1P', 'M2P', 'M3P', 'M4P', 'M5P'];

    const [total, setTotal] = useState()
    const [notaEletricidade, setEletricidade] = useState()
    const [notaEletronica, setEletronica] = useState()
    const [notaPneumatica, setPneumatica] = useState()
    const [notaPLCs, setPLCs] = useState()

    const BuscarProgTotal = async (chave) => {
      try {
        const jsonValue = await AsyncStorage.getItem(chave)
        var progTotal = jsonValue != null ? JSON.parse(jsonValue) : null;
        setTotal(progTotal)
      } catch(e) {
        console.log(e)
      }
    }

    const BuscarProgEletricidade = async (chave) => {
      try {
        const jsonValue = await AsyncStorage.getItem(chave)
        var progEletricidade = jsonValue != null ? JSON.parse(jsonValue) : null;
        setEletricidade(progEletricidade)
      } catch(e) {
        console.log(e)
      }
    }
    const BuscarProgEletronica = async (chave) => {
      try {
        const jsonValue = await AsyncStorage.getItem(chave)
        var progEletronica = jsonValue != null ? JSON.parse(jsonValue) : null;
        setEletronica(progEletronica)
      } catch(e) {
        console.log(e)
      }
    }
    const BuscarProgPneumatica = async (chave) => {
      try {
        const jsonValue = await AsyncStorage.getItem(chave)
        var progPneumatica = jsonValue != null ? JSON.parse(jsonValue) : null;
        setPneumatica(progPneumatica)
      } catch(e) {
        console.log(e)
      }
    }
    const BuscarProgPLCs = async (chave) => {
      try {
        const jsonValue = await AsyncStorage.getItem(chave)
        var progPLCs = jsonValue != null ? JSON.parse(jsonValue) : null;
        setPLCs(progPLCs)
      } catch(e) {
        console.log(e)
      }
    }

    function ProgressoEletricidade(){
      BuscarProgEletricidade(chaves[0])
       progresso1 = notaEletricidade
      return progresso1
    }

    function ProgressoEletronica(){
      BuscarProgEletronica(chaves[1])
       progresso2 = notaEletronica
      return progresso2
    }

    function ProgressoPneumatica(){
      BuscarProgPneumatica(chaves[2])
       progresso3 = notaPneumatica
      return progresso3
    }

    function ProgressoPLCs(){
      BuscarProgPLCs(chaves[3])
       progresso4 = notaPLCs
      return progresso4
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
      let soma = (ProgressoEletricidade()+ProgressoEletronica()+ProgressoPLCs()+ProgressoPneumatica())/4;
      Armazenar('M5P', soma)
    }
    
    somaNotasTotal()

    function ProgressoTotal(){
      BuscarProgTotal('M5P')
      let totalFinal = total
      return totalFinal
  }

  return (
    <SafeAreaView style={styles.container1}>
      <Text style={styles.bemvindo}>Bem vindo!</Text>
      <Text style={styles.progresso}>Progresso: {ProgressoTotal()*100}%</Text>
      <Progress.Bar progress={ProgressoTotal()} width={200} height={20} color='#0353a4' marginLeft= {10} />
      
      <SafeAreaView style={styles.container2}>
      <Text style={styles.bemvindo}>O que vamos aprender hoje?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Eletricidade")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Eletricidade</Text>
        <Progress.Bar progress={ProgressoEletricidade()} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Eletronica")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Eletrônica</Text>
        <Progress.Bar progress={ProgressoEletronica()} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Pneumatica")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Pneumática</Text>
        <Progress.Bar progress={ProgressoPneumatica()} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("CLPs")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>CLPs</Text>
        <Progress.Bar progress={ProgressoPLCs()} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  
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
        <Stack.Screen name="Aprenda Automação Industrial" component={HomeScreen} />
        <Stack.Screen name="ModeloAtividade" component={ModeloAtividade} />
        <Stack.Screen name="Atividade 1 - Eletricidade" component={Perguntas11}/>
        <Stack.Screen name="Atividade 2 - Eletricidade" component={Perguntas12}/>
        <Stack.Screen name="Atividade 3 - Eletricidade" component={Perguntas13}/>
        <Stack.Screen name="Atividade 4 - Eletricidade" component={Perguntas14}/>
        <Stack.Screen name="Atividade 1 - Eletronica" component={Perguntas21}/>
        <Stack.Screen name="Atividade 2 - Eletronica" component={Perguntas22}/>
        <Stack.Screen name="Atividade 3 - Eletronica" component={Perguntas23}/>
        <Stack.Screen name="Atividade 4 - Eletronica" component={Perguntas24}/>
        <Stack.Screen name="Atividade 1 - Pneumatica" component={Perguntas31}/>
        <Stack.Screen name="Atividade 2 - Pneumatica" component={Perguntas32}/>
        <Stack.Screen name="Atividade 3 - Pneumatica" component={Perguntas33}/>
        <Stack.Screen name="Atividade 4 - Pneumatica" component={Perguntas34}/>
        <Stack.Screen name="Atividade 1 - CLPs" component={Perguntas41}/>
        <Stack.Screen name="Atividade 2 - CLPs" component={Perguntas42}/>
        <Stack.Screen name="Atividade 3 - CLPs" component={Perguntas43}/>
        <Stack.Screen name="Atividade 4 - CLPs" component={Perguntas44}/>
        <Stack.Screen name="Eletricidade" component={Eletricidade} />
        <Stack.Screen name="Atividades de Eletricidade" component={AtvEletricidade} />
        <Stack.Screen name="Eletronica" component={Eletronica} />
        <Stack.Screen name="Atividades de Eletronica" component={AtvEletronica} />
        <Stack.Screen name="CLPs" component={CLPs} />
        <Stack.Screen name="Atividades de CLPs" component={AtvClps} />
        <Stack.Screen name="Pneumatica" component={Pneumatica} />
        <Stack.Screen name="Atividades de Pneumatica" component={AtvPneumatica} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;