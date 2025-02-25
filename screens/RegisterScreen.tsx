import { Text, TextInput, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { RootStackParamList } from '../navigators/RootNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BackButton from '../components/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import pb from '../services/pocketbase'; // PocketBase servisini içe aktar
import {PB_EMAIL, PB_PASSWORD} from '@env';

interface RegisterForm {
  email: string;
  password: string;
  passwordConfirm:string;
}

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const [form, setForm] = useState<RegisterForm>({
    email: '',
    password: '',
    passwordConfirm:'',
  });

  function handleInputChange(field: keyof RegisterForm, value: string): void {
    setForm({ ...form, [field]: value });
  }

  const handleRegister = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    // Şifre uzunluğu kontrolü
    if (form.password.length < 6) {
      Alert.alert("Hata", "Şifre en az 6 karakter olmalıdır.");
      return;
    }
    if (form.password !== form.passwordConfirm) {
      Alert.alert("Hata", "Şifreler eşleşmiyor");
      return;
  }
  

    // E-posta formatını kontrol et
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      Alert.alert("Hata", "Lütfen geçerli bir e-posta adresi girin.");
      return;
    }
    console.log(form)
    await pb.admins.authWithPassword(PB_EMAIL, PB_PASSWORD);

    try {
      // Kullanıcıların kayıt olduğu koleksiyon "users" olmalıdır.
      const newUser = await  pb.collection("users").create({
        email: form.email,
        password: form.password,
        passwordConfirm: form.passwordConfirm, // PocketBase için gerekli

      });

      console.log("Kullanıcı başarıyla oluşturuldu:", newUser);
      Alert.alert("Başarılı", "Hesap oluşturuldu, giriş yapabilirsiniz.");

      // Kullanıcıyı login sayfasına yönlendir (geri dönüşü kapatmak için)
      navigation.reset({ index: 0, routes: [{ name: "Login" }] });
    } catch (error: any) {
      console.error("Kayıt hatası:", error);
      Alert.alert("Hata", error.message || "Kayıt sırasında bir hata oluştu.");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
        {/* HEADER */}
        <View style ={styles.header}>
            <BackButton navigation={navigation} targetScreen="Home"/>
            <Text style={styles.title}>CodExam</Text>
        </View>

        {/* BODY */}
        <View style={styles.body}>
            <View style={styles.icon}>
                <Ionicons name="code" size={40} />
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

        container: {
          flex: 1,
          backgroundColor: "#1e1e2e",
        },
        header: {
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#cdd6f4",
        },
        title: {
          fontSize: 50,
          color: "#1e1e2e",
          fontWeight: "bold",
          textAlign: "center",
        },
        body: {
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#1e1e2e",
        },
        icon: {
          marginLeft: 40,
          textAlign: "center",
        },
        footer: {
          flex: 6,
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