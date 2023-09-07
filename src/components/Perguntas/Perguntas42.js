import { SafeAreaView,TouchableOpacity, ScrollView, StyleSheet, Text, View, ToastAndroid } from "react-native"
import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Perguntas42(){
  
  const navigation = useNavigation();

  const [checked1, setChecked1] = React.useState();
  const [checked2, setChecked2] = React.useState();
  const [checked3, setChecked3] = React.useState();
  const [checked4, setChecked4] = React.useState();

  const Armazenar = async (chave, valor) => {
    try {
      const jsonValue = JSON.stringify(valor)
      await AsyncStorage.setItem(chave, jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  function responder() {
    const nota = somaRespostas();
    Armazenar('M4Q2', nota);
  }
  
  function somaRespostas() {
    let nota = 0;
  
    if (checked1 === '14') {
      nota += 2.5;
    } else {
      nota += 0;
    }
  
    if (checked2 === '23') {
      nota += 2.5;
    } else {
      nota += 0;
    }
  
    if (checked3 === '33') {
      nota += 2.5;
    } else {
      nota += 0;
    }
  
    if (checked4 === '43') {
      nota += 2.5;
    } else {
      nota += 0;
    }
  
    return nota;
  }
  

  const showToast = () => {
    ToastAndroid.show('Atividade respondida ! Por favor aguarde feedback', ToastAndroid.SHORT);
  };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.View}>
                <Text style={styles.titulo}>Questão 1</Text>
                <Text style={styles.texto}>O que são protocolos de comunicação em sistemas de automação industrial?</Text>
                <RadioButton.Item style={styles.radio} label="Documentos de especificações técnicas" value="11" status={ checked1 === '11' ? 'checked' : 'unchecked' } onPress={() => setChecked1('11')}/>
                <RadioButton.Item style={styles.radio} label="Linguagens de programação" value="12" status={ checked1 === '12' ? 'checked' : 'unchecked' } onPress={() => setChecked1('12')}/>
                <RadioButton.Item style={styles.radio} label="Componentes físicos de CLPs" value="13" status={ checked1 === '13' ? 'checked' : 'unchecked' } onPress={() => setChecked1('13')}/>
                <RadioButton.Item style={styles.radio} label="Conjuntos de regras para comunicação entre dispositivos" value="14" status={ checked1 === '14' ? 'checked' : 'unchecked' } onPress={() => setChecked1('14')}/>
              </View>
              <View style={styles.View}>
                    <Text style={styles.titulo}>Questão 2</Text>
                    <Text style={styles.texto}>Qual é a principal vantagem de usar redes industriais na comunicação de CLPs?</Text>
                    <RadioButton.Item style={styles.radio} label="Baixa velocidade de transferência de dados" value="21" status={ checked2 === '21' ? 'checked' : 'unchecked' } onPress={() => setChecked2('21')}/>
                    <RadioButton.Item style={styles.radio} label="Alta segurança da rede" value="22" status={ checked2 === '22' ? 'checked' : 'unchecked' } onPress={() => setChecked2('22')}/>
                    <RadioButton.Item style={styles.radio} label="Alta confiabilidade e capacidade de comunicação" value="23" status={ checked2 === '23' ? 'checked' : 'unchecked' } onPress={() => setChecked2('23')}/>
                    <RadioButton.Item style={styles.radio} label="Baixa complexidade de configuração" value="24" status={ checked2 === '24' ? 'checked' : 'unchecked' } onPress={() => setChecked2('24')}/>
                  </View> 
              <View style={styles.View}>
                    <Text style={styles.titulo}>Questão 3</Text>
                    <Text style={styles.texto}>Por que é importante realizar a manutenção preventiva em sistemas que utilizam CLPs?</Text>
                    <RadioButton.Item style={styles.radio} label="Para aumentar a complexidade do sistema" value="31" status={ checked3 === '31' ? 'checked' : 'unchecked' } onPress={() => setChecked3('31')}/>
                    <RadioButton.Item style={styles.radio} label="Para reduzir a eficiência operacional" value="32" status={ checked3 === '32' ? 'checked' : 'unchecked' } onPress={() => setChecked3('32')}/>
                    <RadioButton.Item style={styles.radio} label="Para evitar falhas e paralisações não planejadas" value="33" status={ checked3 === '33' ? 'checked' : 'unchecked' } onPress={() => setChecked3('33')}/>
                    <RadioButton.Item style={styles.radio} label="Para aumentar o consumo de energia" value="34" status={ checked3 === '34' ? 'checked' : 'unchecked' } onPress={() => setChecked3('34')}/>
              </View> 
              <View style={styles.View}>
                    <Text style={styles.titulo}>Questão 4</Text>
                    <Text style={styles.texto}>O que é um software de supervisão usado para diagnosticar CLPs?</Text>
                    <RadioButton.Item style={styles.radio} label="Um software para programar CLPs" value="41" status={ checked4 === '41' ? 'checked' : 'unchecked' } onPress={() => setChecked4('41')}/>
                    <RadioButton.Item style={styles.radio} label="Um software para criar redes industriais" value="42" status={ checked4 === '42' ? 'checked' : 'unchecked' } onPress={() => setChecked4('42')}/>
                    <RadioButton.Item style={styles.radio} label="Um software que permite monitorar e controlar CLPs remotamente" value="43" status={ checked4 === '43' ? 'checked' : 'unchecked' } onPress={() => setChecked4('43')}/>
                    <RadioButton.Item style={styles.radio} label="Um software para medir a temperatura dos CLPs" value="44" status={ checked4 === '44' ? 'checked' : 'unchecked' } onPress={() => setChecked4('44')}/>
              </View> 
              <TouchableOpacity onPressIn={()=>showToast()} onPressOut={()=>navigation.navigate('CLPs')} onPress={()=>responder()} style={styles.botao}><Text style={styles.txbtn}>Responder</Text></TouchableOpacity>
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
      padding:1
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
      padding: 10,
      margin: 5
    },
    View: {
      border: 2,
      borderColor: '#fff',
      marginBottom: 20,
    },
    titulo:{
      fontWeight: 'bold',
      fontSize: 20
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
      botao:{
      width: 330, 
      height: 80, 
      position: "relative", 
      justifyContent: "center", 
      alignItems: "center",
      borderRadius: 20,
      borderWidth:1,
      margin:2,
      marginLeft: 8,
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom:20,
      borderColor: '#000',
    },
    radio:{
      borderWidth: 1,
      margin: 2,
      marginLeft: 8,
      height: 100,
      width: 330,
    },
    texto:{
      marginBottom: 10,
      fontSize: 16,
      fontStyle: "italic",
    },
    txbtn:{
      color: '#000',
    }
  });