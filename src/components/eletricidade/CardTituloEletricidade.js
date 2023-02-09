import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function CardTituloEletricidade() {
  const navigation = useNavigation(); 
    return (

          <Card style={styles.container}>
            {/*<Card.Title style={styles.titulo} title="Eletricidade"/>*/}
            <Card.Cover style={styles.image} source={{ uri: 'https://i.pinimg.com/originals/60/f7/fc/60f7fc0bd47779e25842cda190b924b2.jpg' }} />
            <Card.Actions>
              <Button onPress={() => navigation.navigate("ModeloConteudos")}>Iniciar</Button>
            </Card.Actions>
          </Card>

        );
        
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      maxHeight: 340,
      marginBottom: 20,
      borderRadius: 10,
      borderWidth: 5,
    },
    image: {
      width: 300,
      height: 220,
      marginBottom: 20,
      borderRadius: 5,
      borderWidth: 2
    },
    titulo: {
      alignContent: "center",
      marginHorizontal: 10,
      marginBottom: 10,
    },
  });  


