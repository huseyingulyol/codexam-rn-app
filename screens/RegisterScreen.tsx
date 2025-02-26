import { Text, TextInput, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { RootStackParamList } from '../navigators/RootNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BackButton from '../components/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
<<<<<<< HEAD
import { AuthService } from '../services/AuthService'; // AuthService'i import ettik
=======
>>>>>>> f4ba0a69e4b3adaf2f8b4e7fa6becd4ff33a8e47

interface RegisterForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const [form, setForm] = useState<RegisterForm>({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  function handleInputChange(field: keyof RegisterForm, value: string): void {
    setForm({ ...form, [field]: value });
  }

  const handleRegister = async () => {
    if (!form.email || !form.password || !form.passwordConfirm) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    // Şifre uzunluğu kontrolü
    if (form.password.length < 8) {
      Alert.alert("Hata", "Şifre en az 8 karakter olmalıdır.");
      return;
    }

    if (form.password !== form.passwordConfirm) {
      Alert.alert("Hata", "Şifreler eşleşmiyor.");
      return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      Alert.alert("Hata", "Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    try {
      // AuthService ile kayıt işlemi
      await AuthService.register(form.email, form.password);
      Alert.alert("Başarılı", "Hesap oluşturuldu, giriş yapabilirsiniz.");

      // Kullanıcıyı login sayfasına yönlendir
      navigation.reset({ index: 0, routes: [{ name: "Login" }] });
    } catch (error: any) {
      Alert.alert("Hata", error.message || "Kayıt sırasında bir hata oluştu.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1e1e2e" }}>
      <View style={styles.body}>
        <BackButton navigation={navigation} />
        <View style={styles.title}>
          <Text style={styles.headerText}>
            <Ionicons name="code" size={30} color="#1e1e2e" style={styles.icon} /> CodExam Reader
          </Text>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.registerText}>Register</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={form.email}
            onChangeText={(text) => handleInputChange("email", text)}
            style={styles.input}
            placeholder="E-posta Adresinizi Girin"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.label}>Şifre</Text>
          <TextInput
            value={form.password}
            onChangeText={(text) => handleInputChange("password", text)}
            style={styles.input}
            placeholder="Şifre yazın"
            placeholderTextColor="#888"
            secureTextEntry
          />
          <Text style={styles.label}>Şifre Onay</Text>
          <TextInput
            value={form.passwordConfirm}
            onChangeText={(text) => handleInputChange("passwordConfirm", text)}
            style={styles.input}
            placeholder="Şifreyi tekrar yazın"
            placeholderTextColor="#888"
            secureTextEntry
          />

          {/* ÜYE OL BUTONU */}
          <TouchableOpacity style={styles.buttonRegistered} onPress={handleRegister}>
            <Text style={styles.buttonText}>Üye Ol</Text>
          </TouchableOpacity>

          {/* GİRİŞ YAP LINKİ */}
          <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.registerInfo}>Üye misiniz? Giriş yapın</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    marginRight: 10,
    padding: 20,
    color: "#cdd6f4",
    fontSize: 36,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#1e1e2e",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#cdd6f4",
  },
  title: {
    marginLeft: -100,
    marginTop: 0,
    fontSize: 50,
    color: "#1e1e2e",
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    flexDirection: "column",
    flex: 2,
    justifyContent: "flex-start",
    backgroundColor: "#1e1e2e",
  },
  icon: {
    paddingRight: 36,
    marginTop: 28,
    marginLeft: 36,
    color: "#1e1e2e",
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    flex: 8,
    backgroundColor: "#cdd6f4",
    borderTopRightRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  registerText: {
    fontSize: 60,
    paddingHorizontal: 20,
    marginTop: 10,
    color: "#1e1e2e",
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1e1e2e",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#1e1e2e",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#1e1e2e",
  },
  buttonRegistered: {
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
  buttonRegister: {
    marginTop: 10,
    alignItems: "center",
  },
  registerInfo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e1e2e",
    alignSelf: "center",
  },
});
