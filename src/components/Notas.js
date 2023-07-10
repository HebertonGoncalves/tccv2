import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
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

    const somaNotas = () => {
        BuscarNota(chaves[0])
        let nota1 = resultNota
        BuscarNota(chaves[0])
        let nota2 = resultNota
        BuscarNota(chaves[0])
        let nota3 = resultNota
        let soma = nota1+nota2+nota3
        return soma
    }
      
    return(
        <SafeAreaView>
            <Text>Nota:{somaNotas()}</Text>
        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
   
})