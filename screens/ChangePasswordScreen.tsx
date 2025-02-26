import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigators/RootNavigator';
import BackButton from "../components/BackButton";
// import pb from '../services/pocketbase'; // PocketBase servisini içe aktar
// import { PB_EMAIL, PB_PASSWORD } from '@env';

type Props = NativeStackScreenProps<RootStackParamList, "ChangePassword">;

export default function ChangePasswordScreen({ navigation }: Props) {
    const [form, setForm] = useState({ email: "", oldPassword: "", newPassword: "", newPasswordConfirm: "" });

    const handlePasswordChange = async () => {
        const { email, oldPassword, newPassword, newPasswordConfirm } = form;

        if (!email || !oldPassword || !newPassword || !newPasswordConfirm) {
            Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
            return;
        }

        if (newPassword !== newPasswordConfirm) {
            Alert.alert("Hata", "Yeni şifreler eşleşmiyor.");
            return;
        }
        // await pb.admins.authWithPassword(PB_EMAIL, PB_PASSWORD);

        try {
            // E-posta ile kullanıcıyı al
            // const users = await pb.collection('users').getFullList(200, { filter: `email = "${email}"` });

            // if (users.length === 0) {
            //     Alert.alert("Hata", "Bu e-posta adresiyle kayıtlı kullanıcı bulunamadı.");
            //     return;
            // }

            // const user = users[0];

            // Eski şifreyi doğrula (burada eski şifreyi doğru girmeleri gerekiyor)
            // const authData = await pb.collection('users').authWithPassword(email, oldPassword);

            // if (!authData) {
            //     Alert.alert("Hata", "Eski şifre hatalı.");
            //     return;
            // }

            // Eski şifre doğruysa yeni şifreyi güncelle
            // await pb.collection('users').authWithPassword(email, oldPassword);


            Alert.alert("Başarılı", "Şifre başarıyla güncellendi!");
            navigation.reset({ index: 0, routes: [{ name: "Login" }] }); // Hesap sayfasına yönlendir
        } catch (error) {
            console.error(error);
            Alert.alert("Hata", "Şifre güncellenirken bir hata oluştu.");
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#1e1e2e" }}>
            <View style={styles.header}>
            <BackButton navigation={navigation} />
            
                
                </View>
                
            <View style={styles.body}>
                <View style={styles.icon}>
                    <Ionicons name="code" size={40} color="#cdd6f4" /><Text style={styles.title}>  Şifre Güncelleme</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{ fontSize: 60, paddingHorizontal: 20, marginTop: 50 }}></Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Eski Şifre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Eski şifrenizi yazın"
                        placeholderTextColor="#888"
                        value={form.oldPassword}
                        onChangeText={(text) => setForm({ ...form, oldPassword: text })}
                    />
                    <Text style={styles.label}>Yeni Şifre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Yeni Şifrenizi yazın"
                        placeholderTextColor="#888"
                        secureTextEntry
                        value={form.newPassword}
                        onChangeText={(text) => setForm({ ...form, newPassword: text })}
                    />
                    <Text style={styles.label}>Yeni Şifreyi Tekrar Girin</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Yeni Şifrenizi tekrar girin"
                        placeholderTextColor="#888"
                        secureTextEntry
                        value={form.newPasswordConfirm}
                        onChangeText={(text) => setForm({ ...form, newPasswordConfirm: text })}
                    />
                    <Text style={styles.label}>E-posta</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E-posta adresinizi girin"
                        placeholderTextColor="#888"
                        value={form.email}
                        onChangeText={(text) => setForm({ ...form, email: text })}
                    />
                    <TouchableOpacity style={styles.buttonEntered} onPress={handlePasswordChange}>
                        <Text style={styles.buttonText}>Güncelle</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection:"row",
        textAlign:"left",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#1e1e2e",
        borderBottomRightRadius: 10,
    },
    body: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#1e1e2e",
    },
    footer: {
        flex: 12,
        backgroundColor: "#cdd6f4",
        borderTopRightRadius: 100,
    },
    title: {
        marginTop:-8,
        fontSize: 38,
        color: "#cdd6f4",
        fontWeight: "bold",
        
    },
    icon: {
        flexDirection:"row",
        marginLeft: 30,
        color: "#1e1e2e",
        fontWeight: "bold",
        textAlign: "center",
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
