import { View, Text, Button, TouchableOpacity,StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootNavigator";
import React from "react";
import global from"./styles";
import { SafeAreaView } from "react-native-safe-area-context";



type Props = NativeStackScreenProps<RootStackParamList, "ExamList">;


  export default function ExamListScreen({ navigation }: Props) {
    return (
    <SafeAreaView>
      <View style={global.backgroundLightColor}>
        
        <Text style={{fontSize:40, color:"white"}}>Sınav Listesi</Text>

        <View style={styles.examList}>
        <TouchableOpacity style={styles.buttonSinav} onPress={() => navigation.navigate("ExamName")}>
            <View> 
              <Text style={{fontSize:50,alignItems:"center",color:"#cdd6f4"}}>Sinav1</Text>
            </View>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.buttonCreateExam} onPress={() => navigation.navigate("ExamName")}>
            <View> 
              <Text style={{fontSize:50,alignItems:"center",color:"#cdd6f4"}}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      
      </View> 
    </SafeAreaView>
  
  );
}


const styles=StyleSheet.create({
    
buttonSinav:{
    width: 120,
    height: 120,
    backgroundColor: "#1e1e2e",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
},

 buttonCreateExam:{
    width: 100,
    height: 100,
    backgroundColor: "#1e1e2e",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position:"absolute",
    marginTop:350,
    marginLeft:200
},

examList:{
  // backgroundColor: "#cdd6f4",
  backgroundColor: "red", 
  marginTop:60,
  borderRadius: 30,
  height: 500,
  width:"80%"

},

})