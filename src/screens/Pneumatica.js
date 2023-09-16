import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, Image, View, TouchableHighlight, Linking } from 'react-native';

export default function Pneumatica({navigation}) {

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
    Linking.openURL(''); //pdf 1
  };
  const handleOpenPdf2 = () => {
    Linking.openURL(''); //pdf 2
  };
  const handleOpenPdf3 = () => {
    Linking.openURL(''); //pdf 3
  };
  const handleOpenPdf4 = () => {
    Linking.openURL(''); //pdf 4
  };


  const handleOpenVideo1 = () => {
    Linking.openURL('https://youtu.be/GNXG-JYgnp0'); //video 1
  };
  const handleOpenVideo2 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=c6ob8xVOyIE'); //video 2
  };
  const handleOpenVideo3 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=6hRWzGax7nE'); //video 3
  };
  const handleOpenVideo4 = () => {
    Linking.openURL('https://www.youtube.com/watch?v=iikdLO30Kvg'); //video 4
  };


  const handleOpenMore1 = () => {
    Linking.openURL('https://www.festo.com/br/pt/e/educacao/aprendizagem-digital/elearning-id_31269/'); //aprenda mais
  };
  const handleOpenMore2 = () => {
    Linking.openURL(''); //aprenda mais
  };
  const handleOpenMore3 = () => {
    Linking.openURL(''); //aprenda mais
  };
  const handleOpenMore4 = () => {
    Linking.openURL(''); //aprenda mais
  };


    return (
      
          <SafeAreaView style={styles.container}>
            <Text style={styles.titulo} >Pneumatica</Text>
            <Text style={styles.titulo}>A pneumática desempenha um papel essencial na automação industrial, oferecendo uma alternativa eficiente e versátil para controlar e movimentar equipamentos e processos nas linhas de produção. </Text>
            <SafeAreaView style={styles.container2}>
              <TouchableOpacity style={[styles.cartoes]} onPress={handlePressPdf}>
                <Image style={styles.iconecartoes} source={require('../images/arquivos.png')} />
                <Text style={styles.textoCartoes}>Arquivos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cartoes]} onPress={() => navigation.navigate("Atividades de Pneumatica")}>
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
                          <Text style={styles.textominicartao}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenPdf2}>
                          <Text style={styles.textominicartao}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenPdf3}>
                          <Text style={styles.textominicartao}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenPdf4}>
                          <Text style={styles.textominicartao}>-</Text>
                        </TouchableOpacity>
                       </View>
                      </TouchableHighlight>
                      )}
                  {menuVisibleVideo && (
                    <TouchableHighlight style={styles.menu} onPress={handleCloseVideo}>
                      <View >
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenVideo1}>
                          <Text style={styles.textominicartao}>Aula 1 - Fluidsim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenVideo2}>
                          <Text style={styles.textominicartao}>Aula 2 - Fluidsim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenVideo3}>
                          <Text style={styles.textominicartao}>Aula 3 - Fluidsim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenVideo4}>
                          <Text style={styles.textominicartao}>Aula 4 - Fluidsim</Text>
                        </TouchableOpacity>
                       </View>
                      </TouchableHighlight>
                      )}
                  {menuVisibleMore && (
                    <TouchableHighlight style={styles.menu} onPress={handleCloseMore}>
                      <View >
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenMore1}>
                          <Text style={styles.textominicartao}>Festo Educacao</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenMore2}>
                          <Text style={styles.textominicartao}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenMore3}>
                          <Text style={styles.textominicartao}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.minicartao} onPress={handleOpenMore4}>
                          <Text style={styles.textominicartao}>-</Text>
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
