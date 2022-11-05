//Modelo de tela para atividades

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper";
import * as React from 'react';
import { RadioButton } from 'react-native-paper';

export default function Atividade(){
  const [checked, setChecked] = React.useState('first');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.View}>
                <Text>Qual das alternativas representa a entrada de um sistema ?</Text>
                <RadioButton.Item label="botao" value="primeiro" status={ checked === 'primeiro' ? 'checked' : 'unchecked' } onPress={() => setChecked('primeiro')}/>
                <RadioButton.Item label="botao" value="segundo" status={ checked === 'segundo' ? 'checked' : 'unchecked' } onPress={() => setChecked('segundo')}/>
                <RadioButton.Item label="botao" value="terceiro" status={ checked === 'terceiro' ? 'checked' : 'unchecked' } onPress={() => setChecked('terceiro')}/>
                <RadioButton.Item label="botao" value="quarto" status={ checked === 'quarto' ? 'checked' : 'unchecked' } onPress={() => setChecked('quarto')}/>
              </View> 
              <Button>Avançar</Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:0
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
      padding:10,
      margin: 5
    },
    View: {
      border: 2,
      borderColor: '#fff',
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
  });