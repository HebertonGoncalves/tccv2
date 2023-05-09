import { Image, StyleSheet, Text, TouchableOpacity, View, Button, ImageBackground } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image = {uri: 'https://i.pinimg.com/originals/60/f7/fc/60f7fc0bd47779e25842cda190b924b2.jpg'};

export default function TelaIntroducao({navigation}) {
    return (
      <ImageBackground source={image} style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>    
        <Text>Introducão</Text>
        <Button
          title="Home"
          onPress={() => navigation.navigate("home")}
        />
        </View>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      width:"100%",
      height:"100%"
    }
  })