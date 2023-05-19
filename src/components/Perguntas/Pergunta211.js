import { SafeAreaView,TouchableOpacity, ScrollView, StyleSheet, Text, View } from "react-native"
import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Pergunta211(){

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

  function responder (){
      responder1();
      responder2();
      responder3();
      responder4();
  }

  function responder1 (){
    if(checked1=='11'){//onde se define a resposta correta
      Armazenar('eletq1q1', 2.5)
    }else{Armazenar('eletq1q1', 0)}
  }
  function responder2 (){
    if(checked1=='11'){//onde se define a resposta correta
      Armazenar('eletq1q2', 2.5)
    }else{Armazenar('eletq1q2', 0)}
  }
  function responder3 (){
    if(checked1=='11'){//onde se define a resposta correta
      Armazenar('eletq1q3', 2.5)
    }else{Armazenar('eletq1q3', 0)}
  }
  function responder4 (){
    if(checked1=='11'){//onde se define a resposta correta
      Armazenar('eletq1q4', 2.5)
    }else{Armazenar('eletq1q4', 0)}
  }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.View}>
                <Text style={styles.titulo}>Questão 1</Text>
                <Text style={styles.texto}>roduzir seus produtos ou serviços com maior qualidade, maior produtividade e baixo custo de produção.
                </Text>
                <RadioButton.Item style={styles.radio} label=" da Tecnol." value="11" status={ checked1 === '11' ? 'checked' : 'unchecked' } onPress={() => setChecked1('11')}/>
                <RadioButton.Item style={styles.radio} label="É cada vetrial." value="12" status={ checked1 === '12' ? 'checked' : 'unchecked' } onPress={() => setChecked1('12')}/>
                <RadioButton.Item style={styles.radio} label="Permite oas atividadesimento de software." value="13" status={ checked1 === '13' ? 'checked' : 'unchecked' } onPress={() => setChecked1('13')}/>
                <RadioButton.Item style={styles.radio} label="Solução en no desenvolvimento de software." value="14" status={ checked1 === '14' ? 'checked' : 'unchecked' } onPress={() => setChecked1('14')}/>
              </View>
              <View style={styles.View}>
                    <Text style={styles.titulo}>Questão 2</Text>
                    <Text style={styles.texto}>Hoje, cada vez mais, as empresas que atuam no ramo de software têm adotado o termo "Fábrica de Software", seja em virtude 
                      da alta demanda de software no mercado, seja o aumento crescente da complexidade dos softwares, 
                      seja como uma solução para produzir seus produtos ou serviços com maior qualidade, maior produtividade e baixo custo de produção.
                    </Text>
                    <RadioButton.Item style={styles.radio} label="Associa os ofissionais da Tecnologia da Informação." value="21" status={ checked2 === '21' ? 'checked' : 'unchecked' } onPress={() => setChecked2('21')}/>
                    <RadioButton.Item style={styles.radio} label="É cada vez ar as demaonados à automação industrial." value="22" status={ checked2 === '22' ? 'checked' : 'unchecked' } onPress={() => setChecked2('22')}/>
                    <RadioButton.Item style={styles.radio} label="Permite o alvimento de software." value="23" status={ checked2 === '23' ? 'checked' : 'unchecked' } onPress={() => setChecked2('23')}/>
                    <RadioButton.Item style={styles.radio} label="Solução encoada no desenvolvimento de software." value="24" status={ checked2 === '24' ? 'checked' : 'unchecked' } onPress={() => setChecked2('24')}/>
                  </View> 
              <View style={styles.View}>
                    <Text style={styles.titulo}>Questão 3</Text>
                    <Text style={styles.texto}>Hoje, cada vez mais, as empresas que atuam no ramo de software têm adotado o termo "Fábrica de Software", seja em virtude 
                      da alta demanda de software no mercado, seja o aumento crescente da complexidade dos softwares, 
                      seja como uma solução para produzir seus produtos ou serviços com maior qualidade, maior produtividade e baixo custo de produção.
                    </Text>
                    <RadioButton.Item style={styles.radio} label="Asais da Tecnologia da Informação." value="31" status={ checked3 === '31' ? 'checked' : 'unchecked' } onPress={() => setChecked3('31')}/>
                    <RadioButton.Item style={styles.radio} label="É dos à automação industrial." value="32" status={ checked3 === '32' ? 'checked' : 'unchecked' } onPress={() => setChecked3('32')}/>
                    <RadioButton.Item style={styles.radio} label="Permidades de desenvolvimento de software." value="33" status={ checked3 === '33' ? 'checked' : 'unchecked' } onPress={() => setChecked3('33')}/>
                    <RadioButton.Item style={styles.radio} label="Soluçãcializada no desenvolvimento de software." value="34" status={ checked3 === '34' ? 'checked' : 'unchecked' } onPress={() => setChecked3('34')}/>
              </View> 
              <View style={styles.View}>
                    <Text style={styles.titulo}>Questão 4</Text>
                    <Text style={styles.texto}>Hoje, cada vez mais, as empresas que atuam no ramo de software têm adotado o termo "Fábrica de Software", seja em virtude 
                      da alta demanda de software no mercado, seja o aumento crescente da complexidade dos softwares, 
                      seja como uma solução para produzir seus produtos ou serviços com maior qualidade, maior produtividade e baixo custo de produção.
                    </Text>
                    <RadioButton.Item style={styles.radio} label="Assocais da Tecnologia da Informação." value="41" status={ checked4 === '41' ? 'checked' : 'unchecked' } onPress={() => setChecked4('41')}/>
                    <RadioButton.Item style={styles.radio} label="É caados à automação industrial." value="42" status={ checked4 === '42' ? 'checked' : 'unchecked' } onPress={() => setChecked4('42')}/>
                    <RadioButton.Item style={styles.radio} label="Permite ode desenvolvimento de software." value="43" status={ checked4 === '43' ? 'checked' : 'unchecked' } onPress={() => setChecked4('43')}/>
                    <RadioButton.Item style={styles.radio} label="Soluçãolizada no desenvolvimento de software." value="44" status={ checked4 === '44' ? 'checked' : 'unchecked' } onPress={() => setChecked4('44')}/>
              </View> 
              <TouchableOpacity onPress={responder()} style={styles.botao}><Text>Responder</Text></TouchableOpacity>
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
      borderRadius: 1,
      backgroundColor: "#767b91",
      borderWidth:1,
      margin:2,
      marginLeft: 8,
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom:20
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
      height: 200,
    }
  });