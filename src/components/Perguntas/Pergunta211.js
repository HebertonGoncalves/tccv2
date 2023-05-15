import { SafeAreaView,TouchableOpacity, ScrollView, StyleSheet, Text, View } from "react-native"
import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Pergunta211(){

  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(checked);


  const Armazenar = async (chave, valor) => {
    try {
      const jsonValue = JSON.stringify(valor)
      await AsyncStorage.setItem(chave, jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  function correta (){
      if(checked=='primeiro'){
        Armazenar('211', 1)
      }else{Armazenar('211', 0)}
  }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.View}>
                <Text style={styles.texto}>Hoje, cada vez mais, as empresas que atuam no ramo de software têm adotado o termo "Fábrica de Software", seja em virtude 
                  da alta demanda de software no mercado, seja o aumento crescente da complexidade dos softwares, 
                  seja como uma solução para produzir seus produtos ou serviços com maior qualidade, maior produtividade e baixo custo de produção.
                </Text>
                <RadioButton.Item style={styles.radio} label="Associa os processos do Feudalismo e Fordismo para engajar profissionais da Tecnologia da Informação." value="primeiro" status={ checked === 'primeiro' ? 'checked' : 'unchecked' } onPress={() => setChecked('primeiro')}/>
                <RadioButton.Item style={styles.radio} label="É cada vez mais adotado para solucionar as demandas de software relacionados à automação industrial." value="segundo" status={ checked === 'segundo' ? 'checked' : 'unchecked' } onPress={() => setChecked('segundo')}/>
                <RadioButton.Item style={styles.radio} label="Permite o aumento da qualidade, da produtividade e padronizar as atividades de desenvolvimento de software." value="terceiro" status={ checked === 'terceiro' ? 'checked' : 'unchecked' } onPress={() => setChecked('terceiro')}/>
                <RadioButton.Item style={styles.radio} label="Solução encontrada para a dificuldade de encontrar mão de obra especializada no desenvolvimento de software." value="quarto" status={ checked === 'quarto' ? 'checked' : 'unchecked' } onPress={() => setChecked('quarto')}/>
              </View> 
              <TouchableOpacity onPressOut={()=>navigation.navigate('ModeloAtividade')} onPress={correta()} style={styles.botao}><Text>Responder</Text></TouchableOpacity>
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
      borderRadius: 1,
      backgroundColor: "#0466c8",
      borderWidth:1,
      margin:2,
      marginLeft: 8,
      fontWeight: 'bold',
      fontSize: 18,
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
    }
  });