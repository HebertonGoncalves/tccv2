import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';

export default function ModeloConteudos({navigation}) {
    return (
      
          <SafeAreaView style={styles.container}>
            <TouchableOpacity style={[styles.cartoes, styles.green]}>
              <Text style={styles.textoCartoes}>Arquivos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cartoes, styles.red]}>
              <Text style={styles.textoCartoes}>Ativides Avaliativas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cartoes, styles.yellow]}>
              <Text style={styles.textoCartoes}>Aulas Conceituais</Text>
            </TouchableOpacity>
          </SafeAreaView>

    );
}

  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: 'blue',
      flex: 1,
      flexDirection:'row',
      flexWrap: 'wrap',
      padding: 20,
      alignContent: 'center',
      width:"100%",
      height:"100%"
    },
    cartoes: {
      width: 150, 
      height: 150, 
      position: "relative", 
      justifyContent: "center", 
      alignItems: "center",
      borderRadius: 20,
      margin: 5,
    },
    textoCartoes: { 
      fontSize: 20, 
      color: '#fff',
      textAlign: 'center',
    },
    red: { 
      backgroundColor: 'red',
    },
    blue: { 
      backgroundColor: 'blue',
    },
    black: { 
      backgroundColor: 'black',
    },
    green: { 
      backgroundColor: 'green',
    },
    yellow: { 
      backgroundColor: 'yellow',
    },
  })
