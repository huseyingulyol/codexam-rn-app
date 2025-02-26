import { View, Text, Button, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../navigators/RootNavigator";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import global from "./styles"
import BackButton from "../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = BottomTabScreenProps<RootStackParamList, "ExamName">;

export default function ExamNameScreen({ navigation }: Props) {
  const [examName, setExamName] = useState("");

  return (
    <SafeAreaView>
    <View style={styles.container}>
     
    <TouchableOpacity style={styles.buttonCameraPage} onPress={() => navigation.navigate("Camera")}>
                     <View> 
                      <Text style={{fontSize:36,alignItems:"center",color:"#1e1e2e"}}>foto yükle</Text>
                    </View>
            </TouchableOpacity>
      
      
    <BackButton navigation={navigation}/>
    </View>
    </SafeAreaView>
    
  );
}
const styles=StyleSheet.create({
    buttonCameraPage:{
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
  container:{

  },
  examName:{
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop:40,
    backgroundColor: "lightblue",
},
label: {
  fontWeight: "bold",
  fontSize: 35,
  marginLeft: "2%",
  marginTop: "30%",
  },
input: {
  width: "80%",
  padding: 15,
  borderWidth: 1,
  borderColor: "gray",
  backgroundColor: "white",
  marginLeft: "2%",
  marginTop: "5%",
  borderBottomRightRadius:50,
  borderTopRightRadius:50,
  fontSize: 25,
},
buttonEntered: {
    backgroundColor: "#1e1e2e",
    borderRadius: 30,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "#cdd6f4",
    fontWeight: "bold",
  },
});
