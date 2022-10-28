import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function CardVideoEletricidade() {
  const navigation = useNavigation(); 
    return (
          <Card style={styles.container}>
            <Card.Title style={styles.titulo} title="Eletricidade" subtitle="Lei de Ohm"  />
            <Card.Cover style={styles.image} source={{ uri: 'https://s1.static.brasilescola.uol.com.br/be/2022/07/relacao-tensao-corrente-resistencia-eletricas.jpg' }} />
            <Card.Actions>
              <Button onPress={() => navigation.navigate("TelaIntroducao")}>Iniciar</Button>
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
      borderWidth: 5
    },
    image: {
      width: 250,
      height: 159,
      marginBottom: 20,
      borderRadius: 5,
      borderWidth: 2
    },
    titulo: {
      

      marginHorizontal: 10,
      marginBottom: 10,
    },
  });  
