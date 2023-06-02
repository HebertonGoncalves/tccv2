import { View, StyleSheet } from "react-native"
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Notas(){

  guarda_notas()

  let chaves = ['M1Q1P1','M1Q1P2','M1Q1P3','M1Q1P4',
                'M1Q2P1','M1Q2P2','M1Q2P3','M1Q2P4',
                'M1Q3P1','M1Q3P2','M1Q3P3','M1Q3P4',
                'M1Q4P1','M1Q4P2','M1Q4P3','M1Q4P4',
                'M2Q1P1','M2Q1P2','M2Q1P3','M2Q1P4',
                'M2Q2P1','M2Q2P2','M2Q2P3','M2Q2P4',
                'M2Q3P1','M2Q3P2','M2Q3P3','M2Q3P4',
                'M2Q4P1','M2Q4P2','M2Q4P3','M2Q4P4',
                'M3Q1P1','M3Q1P2','M3Q1P3','M3Q1P4',
                'M3Q2P1','M3Q2P2','M3Q2P3','M3Q2P4',
                'M3Q3P1','M3Q3P2','M3Q3P3','M3Q3P4',
                'M3Q4P1','M3Q4P2','M3Q4P3','M3Q4P4',
                'M4Q1P1','M4Q1P2','M4Q1P3','M4Q1P4',
                'M4Q2P1','M4Q2P2','M4Q2P3','M4Q2P4',
                'M4Q3P1','M4Q3P2','M4Q3P3','M4Q3P4',
                'M4Q4P1','M4Q4P2','M4Q4P3','M4Q4P4',]

  let notas = [];
  let pontos = [];
  let i, j, k;
  let l = 0;

    const Buscar = async (chave) => {
        try {
          const jsonValue = await AsyncStorage.getItem(chave)
          var result = jsonValue != null ? JSON.parse(jsonValue) : null;
          setResult(result)
        } catch(e) {
          console.log(e)
        }
      }


    function guarda_notas(){
          for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
              for (k = 0; k < 4; k++){
                pontos[i][j][k] = Buscar(chaves[l]);
                notas[i][j] = pontos[i][j][k]+notas[i][j];
                l++;
                //return?
          }
      }
    }
  }

    return (
        <View></View> 
    )
}


const styles = StyleSheet.create({



})

