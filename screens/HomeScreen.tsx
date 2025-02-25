import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import global from "./styles"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from "../navigators/RootNavigator";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props){
    return (
        
    <View style={global.backgroundDarkColor}>
        <View style={styles.header}> 
            <Ionicons name="code" size={40} color="white" style={styles.icon} />
            <Text style={styles.title}>  CodExam Reader</Text>
        </View>
        <Text style={styles.text}>Merhaba CodExam'a Hoşgeldin </Text>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Login")}>
                 <View> 
                  <Text style={{fontSize:36,alignItems:"center",color:"#1e1e2e"}}>Giriş Yap</Text>
                </View>
        </TouchableOpacity>
        <View style={styles.footer}>
            <Text style={{color:"#cdd6f4",textAlign:"center"}}>Amasya Üniversitesi için <Text style={{ fontWeight: "bold" }}>Streamworld</Text> ekibi tarafında geliştirilmiştir.</Text>
        </View>
        
      
      
    </View>
    
  ); 
}


const styles=StyleSheet.create({
footer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "70%",
    backgroundColor: "#1e1e2e",
    padding: 5,
    borderRadius: 5,
    
},
buttonLogin: {
    width: "60%",
    height: "10%",
    backgroundColor: "#cdd6f4",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:"20%",
    marginTop: "50%",
    
},
title:{
    fontSize: 36,
    color: "#cdd6f4", // Açık renkli yazı
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "15%",

},
text:{
    fontSize: 18,
    color: "#cdd6f4", // Açık renkli yazı
    textAlign: "center",
    marginTop: "5%",
    marginHorizontal: "5%",
    
},
icon:{
    color: "#cdd6f4", // Açık renkli yazı
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "15%",
},
header:{  
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    marginLeft: "1%",
}
})