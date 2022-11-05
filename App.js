import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, ScrollView } from 'react-native';
import TelaIntroducao from './src/screens/TelaIntroducao';
import Cartao from './src/components/eletricidade/CardTituloEletricidade'
import ModeloConteudos from './src/components/ModeloConteudos'
import Conteudo from './src/components/Conteudo';
import Atividade from './src/components/Atividade';

function HomeScreen({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>
      <Text>adas</Text>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.instructions}>
        Inicie os seus estudos com o método
      </Text>
      <Button
        title="Introducao"
        onPress={() => navigation.navigate("TelaIntroducao")}
      />
      <TouchableOpacity
        onPress={() => alert('Resposta correta !')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Iniciar</Text>
      </TouchableOpacity>
      <Cartao/>
      <Cartao/>
      <Cartao/>
      <Cartao/>
      <Cartao/>
      <Cartao/>
      </ScrollView>
      <Text>adas</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 10
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
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={HomeScreen} />
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