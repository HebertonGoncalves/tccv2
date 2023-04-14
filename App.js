import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import TelaIntroducao from './src/screens/TelaIntroducao';
import ModeloConteudos from './src/components/ModeloConteudos'
import Conteudo from './src/components/Conteudo';
import Atividade from './src/components/Atividade';
import * as Progress from 'react-native-progress';

var valorProgresso = 0.25;
var progresso = valorProgresso*100;
var aluno = 'Heberton';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container1}>
      <Text style={styles.bemvindo}>Bem vindo, {aluno}!</Text>
      <Text style={styles.progresso}>Progresso: {progresso}%</Text>
      <Progress.Bar progress={valorProgresso} width={200} height={20} color='#0353a4' marginLeft= {10} />
      
      <SafeAreaView style={styles.container2}>
      <Text style={styles.bemvindo}>O que vamos aprender hoje?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("ModeloConteudos")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Eletricidade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ModeloConteudos")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Eletrônica</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ModeloConteudos")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>Pneumática</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ModeloConteudos")}
        style={styles.cartoes}>
        <Text style={styles.textoCartoes}>CLPs</Text>
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
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Automação" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="TelaIntroducao" component={TelaIntroducao} />   
        <Stack.Screen name="ModeloConteudos" component={ModeloConteudos} />
        <Stack.Screen name="Conteudo" component={Conteudo} />
        <Stack.Screen name="Atividade" component={Atividade}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;