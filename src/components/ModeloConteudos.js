import { StyleSheet, TouchableOpacity, SafeAreaView, Text, Image } from 'react-native';

export default function ModeloConteudos({navigation}) {
    return (
      
          <SafeAreaView style={styles.container}>
            <Text style={styles.titulo} >Eletricidade</Text>
            <SafeAreaView style={styles.container2}>
              <TouchableOpacity style={[styles.cartoes]}>
                <Image style={styles.iconecartoes} source={require('../images/arquivos.png')} />
                <Text style={styles.textoCartoes}>Arquivos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cartoes]}>
                <Image style={styles.iconecartoes} source={require('../images/atividades.png')} />
                <Text style={styles.textoCartoes}>Ativides Avaliativas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cartoes]}>
                <Image style={styles.iconecartoes} source={require('../images/videos.png')} />
                <Text style={styles.textoCartoes}>Aulas Conceituais</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cartoes]}>
                <Image style={styles.iconecartoes} source={require('../images/prova.png')} />
                <Text style={styles.textoCartoes}>Avaliação Final</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaView>

    );
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#012a4a',
      padding: 20,
    },
    container2:{
      flex: 1,
      flexDirection:'row',
      flexWrap: 'wrap',
      backgroundColor: '#012a4a',
      padding: 20,
      alignContent: 'center'
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
      fontSize: 15, 
      color: '#fff',
      textAlign: 'center',
    },
  })
