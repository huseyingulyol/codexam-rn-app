import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import global from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
const ExamNameScreen = ({ navigation }: { navigation: any }) => {
  const [examName, setExamName] = useState('');

  const handleContinue = () => {
    if (examName.trim()) {
      navigation.navigate('CameraPage');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{...styles.container}}>
        <TouchableOpacity onPress={() => navigation.navigate("ExamList")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Sınav Tanımla</Text>
        <TextInput
          style={styles.input}
          placeholder="Sınav adınızı giriniz..."
          value={examName}
          onChangeText={setExamName}
        />
        <TouchableOpacity
          onPress={handleContinue}
          style={[styles.button, !examName.trim() && styles.disabledButton]}
          disabled={!examName.trim()}
        >
          <Text style={styles.buttonText}>Devam Et</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f7fc",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: 24,
    justifyContent: "center",
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 48,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 16,
    padding: 16,
    fontSize: 18,
    marginTop: 80,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 16,
    padding: 16,
    marginTop: 32,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ExamNameScreen;