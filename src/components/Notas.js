import { View } from "react-native"
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Notas(){

    const Buscar = async (chave) => {
        try {
          const jsonValue = await AsyncStorage.getItem(chave)
          var result = jsonValue != null ? JSON.parse(jsonValue) : null;
          setResult(result)
        } catch(e) {
          console.log(e)
        }
      }


    return (
        <View></View>
    )
}


const styles = StyleSheet.create({



})

