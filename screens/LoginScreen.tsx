import React, { useState, useContext } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigators/RootNavigator';
import BackButton from "../components/BackButton";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const authContext = useContext(AuthContext); // ✅ AuthContext'i kullan
  const [form, setForm] = useState({ email: "", password: "" });

  // Kullanıcı giriş işlemi
  const handleLogin = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }
    try {
      // PocketBase ile kullanıcı giriş işlemi

      Alert.alert("Başarılı", "Giriş yapıldı!");
      navigation.reset({ index: 0, routes: [{ name: "ExamList" }] }); // ✅ Başarılı girişte yönlendirme
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Giriş Hatası", error.message);
      } else {
        Alert.alert("Giriş Hatası", "Bilinmeyen bir hata oluştu.");
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1e1e2e" }}>
      <View style={styles.body}>
        <BackButton navigation={navigation} targetScreen="Home"/>
        <View style={styles.title}>
          <Text style={styles.headerText}>
            <Ionicons name="code" size={30} color="#1e1e2e" style={styles.icon} /> CodExam Reader
          </Text>
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
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <Text style={styles.label}>Şifre</Text>
          <TextInput
            style={styles.input}
            placeholder="Şifrenizi yazın"
            placeholderTextColor="#888"
            secureTextEntry
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
          <TouchableOpacity style={styles.buttonEntered} onPress={handleLogin}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegisterPage} onPress={() => navigation.navigate("Register")}> 
            <Text style={styles.registerInfo}>Üye değil misiniz? Kaydolun</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    padding: 20,
    color: "#cdd6f4",
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 0,
  },
  body: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#1e1e2e",
  },
  footer: {
    flex: 4,
    backgroundColor: "#cdd6f4",
    borderTopRightRadius: 50,
    paddingBottom: 50,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#1e1e2e",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 40,
    color: "#1e1e2e",
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1e1e2e",
  },
  registerInfo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e1e2e",
    alignSelf: "center",
  },
  buttonRegisterPage: {
    marginTop: 10,
    alignItems: "center",
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
  icon: {
    color: "#cdd6f4",
  },
  title: {
    flex: 1,
  },
});
