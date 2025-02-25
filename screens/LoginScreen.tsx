import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
// import global from './styles';
import BackButton from "../components/BackButton";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigators/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/BackButton';


type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({navigation}:Props) {
  // Kullanıcı adı ve şifreyi saklamak için state tanımlıyoruz
  const [form, setForm] = useState({ username: "", password: "" });

  // Kullanıcı giriş işlemi
  const handleLogin = async () => {
    if (!form.username || !form.password) {
        Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
        return;
    }
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.status === 200) {
          Alert.alert("Başarılı", data.message);
        //   navigation.navigate("ExamList"); // Başarılı girişte yönlendirme yap
      } else {
          Alert.alert("Hata", data.message);
      }
  } catch (error) {
      Alert.alert("Bağlantı Hatası", "Sunucuya bağlanırken bir hata oluştu.");
  }
};





  return (

    
    
    <SafeAreaView style={{flex:1,backgroundColor:"#1e1e2e"}}>
      
      <View style={styles.header}> 
        <BackButton navigation={navigation} 
        />
            <Text style={styles.title}>CodExam</Text>
        </View>
        <View style={styles.body}>
        <View style={styles.icon}>
              <Ionicons name="code" size={40} color="#cdd6f4" />
        </View>
        </View>
        <View style={styles.footer}>
        <Text style={{ fontSize: 60, paddingHorizontal: 20, marginTop: 50 }}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-posta</Text>
          <TextInput
            style={styles.input}
            placeholder="E-posta adresinizi girin"
            placeholderTextColor="#888"
            value={form.username}
            onChangeText={(text) => setForm({ ...form, username: text })}
          />
          <Text style={styles.label}>Şifre</Text>
          <TextInput
            style={styles.input}
            placeholder="Şifrenizi yazın"
            placeholderTextColor="#888"
            secureTextEntry
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
          <TouchableOpacity style={styles.buttonEntered} onPress={handleLogin}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegisterPage} onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerInfo}>Üye değil misiniz? Kaydolun</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>


    
  )
}




const styles=StyleSheet.create({
    header:{  
      textAlign:"center",
      flex: 1,
      flexDirection:"row",
      alignItems:"center",
      backgroundColor:"#cdd6f4"
    },
    body:{
      flex:1,
      justifyContent:"center",
      backgroundColor:"#1e1e2e",
      

    },
    footer:{
        flex:6,
        backgroundColor:"#cdd6f4",
        borderTopRightRadius:50,
        

    },
    buttonText:{
        
    },
    title:{
      fontSize: 50,
      color: "#1e1e2e", // Açık renkli yazı
      fontWeight: "bold",
      textAlign: "center",
    },
    icon:{
      marginLeft:40,
      color: "#1e1e2e", // Açık renkli yazı
      fontWeight: "bold",
      textAlign: "center",
      
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: "#1e1e2e",
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom:40,
      color: "#1e1e2e",
    },
    
    inputContainer: {
      paddingHorizontal: 20,
      marginTop:80
    },
    
    label: {
      
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#1e1e2e",
    },
    registerInfo:{
      fontSize: 12,
      fontWeight: "bold",
      color: "#1e1e2e",
      textAlign:"right"
      
    },buttonRegisterPage:{
      
    },
    buttonEntered:{

    },
  })
  
  