import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { useState } from 'react';
import * as Progress from 'react-native-progress';
import ModeloAtividade from './src/components/ModeloAtividade';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Perguntas11 from './src/components/Perguntas/Perguntas11';
import Perguntas12 from './src/components/Perguntas/Perguntas12';
import Perguntas13 from './src/components/Perguntas/Perguntas13';
import Perguntas14 from './src/components/Perguntas/Perguntas14';
import Notas from './src/components/Notas';
import Eletricidade from './src/screens/Eletricidade';
import AtvEletricidade from './src/screens/AtvEletricidade';
import Eletronica from './src/screens/Eletronica';
import CLPs from './src/screens/CLPs';
import Pneumatica from './src/screens/Pneumatica';


function HomeScreen({ navigation}) {


    let incremento
    let chaves = ['M1Q1', 'M1Q2', 'M1Q3', 'M1Q4',
                  'M2Q1', 'M2Q2', 'M2Q3', 'M2Q4',
                  'M3Q1', 'M3Q2', 'M3Q3', 'M3Q4',
                  'M4Q1', 'M4Q2', 'M4Q3', 'M4Q4',];

    const [prog, setProg] = useState(null)
   

    const Buscar = async (chave) => {
      try {
        const jsonValue = await AsyncStorage.getItem(chave)
        var prog = jsonValue != null ? JSON.parse(jsonValue) : null;
        setProg(prog)
      } catch(e) {
        console.log(e)
      }
    }

  return (
    <SafeAreaView style={styles.container1}>
      <Text style={styles.bemvindo}>Bem vindo!</Text>
      <Text style={styles.progresso}>Progresso: %</Text>
      <Progress.Bar progress={prog} width={200} height={20} color='#0353a4' marginLeft= {10} />
      
      <SafeAreaView style={styles.container2}>
      <Text style={styles.bemvindo}>O que vamos aprender hoje?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Eletricidade")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Eletricidade</Text>
        <Progress.Bar progress={prog} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Eletronica")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Eletrônica</Text>
        <Progress.Bar progress={prog} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Pneumatica")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Pneumática</Text>
        <Progress.Bar progress={prog} width={80} height={20} color='#0353a4' marginLeft= {10} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("CLPs")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>CLPs</Text>
        <Progress.Bar progress={prog} width={80} height={20} color='#0353a4' marginLeft= {10} />
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
        <Stack.Screen name="Notas" component={Notas}/>
        <Stack.Screen name="Eletricidade" component={Eletricidade} />
        <Stack.Screen name="Atividades de Eletricidade" component={AtvEletricidade} />
        <Stack.Screen name="Eletronica" component={Eletronica} />
        <Stack.Screen name="CLPs" component={CLPs} />
        <Stack.Screen name="Pneumatica" component={Pneumatica} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;