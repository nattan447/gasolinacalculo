import { Text, SafeAreaView, StyleSheet,View,TextInput,Button,TouchableOpacity} from 'react-native';
import {useState} from "react";




export default function App() {
  const [km,setKm]=useState("")
const [combustivel,setcombustivel]=useState("")
function calculo(){
  const resultado=km/combustivel;
alert("o comsumo do seu carro é  "+resultado+"km/litro")
}

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
   consumo de combustivel
      </Text>
      <TextInput placeholder="digite os km percorridos" style={styles.input} value={km} onChangeText={(kms)=>setKm(kms)} placeholderTextColor="red"   keyboardType="numeric" ></TextInput>
        <TextInput placeholder="digite a quantidade de combustivel" value={combustivel} placeholderTextColor="red"    style={styles.input} keyboardType="numeric" onChangeText={(combu)=>setcombustivel(combu)}           ></TextInput>
        <TouchableOpacity  style={styles.btn}>
        <Text style={styles.btntxt} onPress={calculo}>calcular o comsumo</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  marginBottom:100,
  fontSize:30,
  color:"red",
fontWeight:"bold",
  },input:{
  
  },btn:{
  alignItems:"center",
  backgroundColor:"red",
  borderRadius:10,padding:15,
  marginTop:30,},
  btntxt:{
    fontSize:30
  },input:{
    fontSize:20,
    padding:20,
    backgroundColor:"white",
    borderRadius:10,margin:15,
    

  }
});
