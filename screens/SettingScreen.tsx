import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const SettingScreen = ({ navigation }:any) => {
  const settingsOptions = [
    { id: 'Account', label: 'Hesabım' },  
    { id: 'Notifications', label: 'Bildirimler' },
    { id: 'Privacy', label: 'Gizlilik' },
  ];

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#1e1e2e"}}>
      <View style={styles.header}> 
        <BackButton navigation={navigation} />
        <Text style={styles.header}>Ayarlar</Text>
      </View>
       <View style={styles.container}>
        {settingsOptions.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate(item.id)} // Sayfaya yönlendirme
          style={styles.button}
          activeOpacity={0.7} // Tıklanma efekti
        >
          <Text style={styles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {  flex: 1 },
  header: { color:"#cdd6f4",fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: {
    backgroundColor: '#cdd6f4',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {color:"#1e1e2e", fontSize: 20 ,fontWeight:"bold"}
});

export default SettingScreen;

  