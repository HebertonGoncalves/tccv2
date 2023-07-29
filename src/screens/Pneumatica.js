import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, Image, View, TouchableHighlight, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Pneumatica({navigation}) {

    const Armazenar = async (chave, valor) => {
      try {
        const jsonValue = JSON.stringify(valor)
        await AsyncStorage.setItem(chave, jsonValue)
      } catch (e) {
        console.log(e)
      }
    }

  const [menuVisible, setMenuVisible] = useState(false);

  const handlePress = () => {
    setMenuVisible(true);
  };

  const handleClose = () => {
    setMenuVisible(false);
  };

  const handleOpenPdf = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); // cap 1 eletricidade ou video
  };


    return (
      
          <SafeAreaView style={styles.container}>
            <Text style={styles.titulo} >Pneumatica</Text>
            <Text style={styles.titulo}>A pneumática desempenha um papel essencial na automação industrial, oferecendo uma alternativa eficiente e versátil para controlar e movimentar equipamentos e processos nas linhas de produção.</Text>
            <SafeAreaView style={styles.container2}>
              <TouchableOpacity style={[styles.cartoes]} onPress={handlePress} onPressOut={()=>Armazenar('M1P1', 0.25)}>
                <Image style={styles.iconecartoes} source={require('../images/arquivos.png')} />
                <Text style={styles.textoCartoes}>Arquivos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cartoes]} onPress={() => navigation.navigate("ModeloAtividade")} onPressOut={()=>Armazenar('M1P2', 0)}>
                <Image style={styles.iconecartoes} source={require('../images/atividades.png')} />
                <Text style={styles.textoCartoes}>Ativide Avaliativa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cartoes]}>
                <Image style={styles.iconecartoes} source={require('../images/videos.png')} onPressOut={()=>Armazenar('M1P3', 0.25)} />
                <Text style={styles.textoCartoes}>Aulas Conceituais</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cartoes]} onPress={handlePress}>
                <Image style={styles.iconecartoes} source={require('../images/prova.png')} onPressOut={()=>Armazenar('M1P4', 0.25)} />
                <Text style={styles.textoCartoes}>Aprenda Mais</Text>
              </TouchableOpacity>
                  {menuVisible && (
                    <TouchableHighlight style={styles.menu} onPress={handleClose}>
                      <View >
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenPdf}>
                          <Text style={styles.textominicartao}>Cap. I: Introdução à Eletricidade: Conceitos Fundamentais e Princípios Básicos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleClose}>
                          <Text style={styles.textominicartao}>Cap. II: Circuitos Elétricos: Leis de Ohm, Kirchhoff e Circuitos RL, RC e RLC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleClose}>
                          <Text style={styles.textominicartao}>Cap. III: Fontes de Energia Elétrica: Geradores, Baterias e Fontes Alternativas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleClose}>
                          <Text style={styles.textominicartao}>Cap. IV: Dispositivos Eletrônicos: Diodos, Transistores e Circuitos Integrados</Text>
                        </TouchableOpacity>
                       </View>
                      </TouchableHighlight>
                      )}
            </SafeAreaView>
          </SafeAreaView>

    );
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#012a4a',
      padding: 10,
    },
    container2:{
      flex: 1,
      flexDirection:'row',
      flexWrap: 'wrap',
      backgroundColor: '#012a4a',
      padding: 20,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    cartoes: {
      width: 120, 
      height: 120, 
      position: "relative", 
      justifyContent: "center", 
      alignItems: "center",
      borderRadius: 10,
      margin: 5,
      backgroundColor: "#5c677d"
    },
    iconecartoes:{
        height:30,
        width:30,
        margin: 5,
    },
    textoCartoes: { 
      fontSize: 15, 
      color: '#fff',
      textAlign: 'center',
    },
    titulo: { 
      fontWeight: 'bold', 
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
    },
    menu: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 20,
    },
    textominicartao: {
      color: '#0c4b9c',
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'left',
      marginHorizontal: 0,
    },
    minicartao:{
      width: 350,
      height: 60,
      borderRadius: 7,
      backgroundColor: '#EBEDEF',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: "grey",
      borderWidth: 2,
    }
  })
