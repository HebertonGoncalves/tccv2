import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, Image, View, TouchableHighlight, Linking } from 'react-native';

export default function Eletricidade({navigation}) {

  const [menuVisiblePdf, setMenuVisiblePdf] = useState(false);
  const [menuVisibleVideo, setMenuVisibleVideo] = useState(false);
  const [menuVisibleMore, setMenuVisibleMore] = useState(false);

  const handlePressPdf = () => {
    setMenuVisiblePdf(true);
  };

  const handleClosePdf = () => {
    setMenuVisiblePdf(false);
  };
  
  const handlePressVideo = () => {
    setMenuVisibleVideo(true);
  };

  const handleCloseVideo = () => {
    setMenuVisibleVideo(false);
  };
  
  const handlePressMore = () => {
    setMenuVisibleMore(true);
  };

  const handleCloseMore = () => {
    setMenuVisibleMore(false);
  };


  const handleOpenPdf1 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //pdf 1
  };
  const handleOpenPdf2 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //pdf 2
  };
  const handleOpenPdf3 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //pdf 3
  };
  const handleOpenPdf4 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //pdf 4
  };


  const handleOpenVideo1 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //video 1
  };
  const handleOpenVideo2 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //video 2
  };
  const handleOpenVideo3 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //video 3
  };
  const handleOpenVideo4 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //video 4
  };


  const handleOpenMore1 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //aprenda mais
  };
  const handleOpenMore2 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //aprenda mais
  };
  const handleOpenMore3 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //aprenda mais
  };
  const handleOpenMore4 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=JmVLKc164eE'); //aprenda mais
  };


    return (
      
          <SafeAreaView style={styles.container}>
            <Text style={styles.titulo} >Eletricidade</Text>
            <Text style={styles.titulo}>A eletricidade é o alicerce para a automação industrial, desempenhando um papel essencial na modernização e eficiência dos processos produtivos.</Text>
            <SafeAreaView style={styles.container2}>
              <TouchableOpacity style={[styles.cartoes]} onPress={handlePressPdf}>
                <Image style={styles.iconecartoes} source={require('../images/arquivos.png')} />
                <Text style={styles.textoCartoes}>Arquivos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cartoes]} onPress={() => navigation.navigate("atvEletricidade")}>
                <Image style={styles.iconecartoes} source={require('../images/atividades.png')} />
                <Text style={styles.textoCartoes}>Ativide Avaliativa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cartoes]} onPress={handlePressVideo}>
                <Image style={styles.iconecartoes} source={require('../images/videos.png')}/>
                <Text style={styles.textoCartoes}>Aulas Conceituais</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cartoes]} onPress={handlePressMore}>
                <Image style={styles.iconecartoes} source={require('../images/prova.png')}/>
                <Text style={styles.textoCartoes}>Aprenda Mais</Text>
              </TouchableOpacity>
                  {menuVisiblePdf && (
                    <TouchableHighlight style={styles.menu} onPress={handleClosePdf}>
                      <View >
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenPdf1}>
                          <Text style={styles.textominicartao}>Cap. I: Introdução à Eletricidade: Conceitos Fundamentais e Princípios Básicos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenPdf2}>
                          <Text style={styles.textominicartao}>Cap. II: Circuitos Elétricos: Leis de Ohm, Kirchhoff e Circuitos RL, RC e RLC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenPdf3}>
                          <Text style={styles.textominicartao}>Cap. III: Fontes de Energia Elétrica: Geradores, Baterias e Fontes Alternativas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenPdf4}>
                          <Text style={styles.textominicartao}>Cap. IV: Dispositivos Eletrônicos: Diodos, Transistores e Circuitos Integrados</Text>
                        </TouchableOpacity>
                       </View>
                      </TouchableHighlight>
                      )}
                  {menuVisibleVideo && (
                    <TouchableHighlight style={styles.menu} onPress={handleCloseVideo}>
                      <View >
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenVideo1}>
                          <Text style={styles.textominicartao}>Aula 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenVideo2}>
                          <Text style={styles.textominicartao}>Aula 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenVideo3}>
                          <Text style={styles.textominicartao}>Aula 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenVideo4}>
                          <Text style={styles.textominicartao}>Aula 4</Text>
                        </TouchableOpacity>
                       </View>
                      </TouchableHighlight>
                      )}
                  {menuVisibleMore && (
                    <TouchableHighlight style={styles.menu} onPress={handleCloseMore}>
                      <View >
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenMore1}>
                          <Text style={styles.textominicartao}>Site 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenMore2}>
                          <Text style={styles.textominicartao}>Site 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenMore3}>
                          <Text style={styles.textominicartao}>Site 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenMore4}>
                          <Text style={styles.textominicartao}>Site 4</Text>
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
