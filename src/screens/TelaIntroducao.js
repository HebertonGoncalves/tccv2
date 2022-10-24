import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TelaIntroducao({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Introducão: O Método Paulo Freire consiste numa proposta para a alfabetização de adultos desenvolvida pelo educador Paulo Freire. O método foi desenvolvido enquanto Freire era diretor do Departamento de Extensões Culturais da Universidade do Recife, adotando-o com um grupo de teste na cidade de Angicos, no Rio Grande do Norte</Text>
        <Button
          title="Home"
          onPress={() => navigation.navigate("home")}
        />
      </View>
    );
  }