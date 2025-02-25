import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BackButton({ navigation } : any)  {
  return (
    <View style={styles.buttonBack}>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <View> 
            <Ionicons name="arrow-back" size={40} color="black" />
        </View>
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  
buttonBack:{
    width: 120,
    height: 50,
    backgroundColor: "#cdd6f4",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    
  }
  
});

