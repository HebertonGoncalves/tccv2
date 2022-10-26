import React from 'react';
import Card from '@mui/material/Card';
import Card1 from './src/components/eletricidade/CardTituloEletricidade';
import Card2 from './src/components/eletricidade/CardVideoEletricidade'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import TelaIntroducao from './src/screens/TelaIntroducao';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        Inicie os seus estudos com o método Paulo Freire !
      </Text>
      <Button
        title="Introducao"
        onPress={() => navigation.navigate("TelaIntroducao")}
      />
      <TouchableOpacity
        onPress={() => alert('Resposta correta !')}
        style={{ backgroundColor: 'black' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Iniciar</Text>
      </TouchableOpacity>
     <Card1></Card1>
     <Card2></Card2>
    </View>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;