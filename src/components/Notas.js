import React from 'react';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function Notas(){

  
    const [resultNota, setResultNota] = useState()

    let chaves = [  'M1Q1P1','M1Q1P2','M1Q1P3','M1Q1P4',
                    'M1Q2P1','M1Q2P2','M1Q2P3','M1Q2P4',
                    'M1Q3P1','M1Q3P2','M1Q3P3','M1Q3P4',
                    'M1Q4P1','M1Q4P2','M1Q4P3','M1Q4P4', ]
    
    
    const BuscarNota = async (chaveNota) => {
        try {
          const jsonValue = await AsyncStorage.getItem(chaveNota)
          var resultNota = jsonValue != null ? JSON.parse(jsonValue) : null;
          setResultNota(resultNota)
        } catch(e) {
          console.log(e)
        }
      }

   function somaNotas() {
        BuscarNota('M1Q1P1')
        let nota1 = resultNota
        return nota1
    }
      
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Lembre o objetivo não é a pontuação e sim o aprendizado, refaça os testes até ficar com 10 em tudo !</Text>
                <Text style={styles.titulos}>Eletricidade</Text>
                <Text style={styles.subtitulos}>Capitulos I e II: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos III e IV: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos V e VI: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos VII e VIII: {somaNotas()}</Text>
                <Text style={styles.titulos}>Eletrônica</Text>
                <Text style={styles.subtitulos}>Capitulos I e II: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos III e IV: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos V e VI: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos VII e VIII: {somaNotas()}</Text>
                <Text style={styles.titulos}>Pneumática</Text>
                <Text style={styles.subtitulos}>Capitulos I e II: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos III e IV: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos V e VI: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos VII e VIII: {somaNotas()}</Text>
                <Text style={styles.titulos}>CLPs</Text>
                <Text style={styles.subtitulos}>Capitulos I e II: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos III e IV: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos V e VI: {somaNotas()}</Text>
                <Text style={styles.subtitulos}>Capitulos VII e VIII: {somaNotas()}</Text>
            </View>
        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
  container: {
        alignItems: 'center',
        position: 'relative',
        
  },
  titulos: {
        color: 'white',
        backgroundColor: '#012a4a',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        paddingLeft: 10,
        marginTop: 10,
        width: 400,
  },
  subtitulos: {
        color: 'white',
        backgroundColor: '#012a4a',
        fontSize: 15,
        borderWidth: 2,
        paddingLeft: 25,
        width: 400,
  } 
})