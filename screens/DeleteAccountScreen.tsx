import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigators/RootNavigator';
import BackButton from '../components/BackButton';
// import pb from '../services/pocketbase'; // PocketBase servisini içe aktar
// import { PB_EMAIL, PB_PASSWORD } from '@env';

type Props = NativeStackScreenProps<RootStackParamList, 'DeleteAccount'>;

export default function DeleteAccountScreen({ navigation }: Props) {
    const [loading, setLoading] = useState(false);

    const handleDeleteAccount = async () => {
        setLoading(true);
        try {
            // Kullanıcı oturumunun geçerli olup olmadığını kontrol et
            // const userId = pb.authStore.model?.id;
            // if (!userId) {
            //     Alert.alert('Hata', 'Kullanıcı oturumu geçersiz. Lütfen tekrar giriş yapın.');
            //     return;
            // }

            // Kullanıcı hesabını sil
            // await pb.collection('users').delete(userId);
            Alert.alert('Başarılı', 'Hesabınız başarıyla silindi.');

            // Oturumu temizle ve giriş ekranına yönlendir
            // pb.authStore.clear();
            navigation.reset({ index: 0, routes: [{ name: 'Login' }] });

        } catch (error:any ) {
            console.error("Silme hatası:", error.message);
            Alert.alert('Hata', 'Hesap silinirken bir hata oluştu: ' );
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1e1e2e' }}>
            <View style={styles.header}>
                <BackButton navigation={navigation} />
                <Text style={styles.title}>Hesabı Sil</Text>
            </View>
            <View style={styles.body}>
                <Ionicons name="trash" size={100} color="#f38ba8" />
                <Text style={styles.warningText}>
                    Hesabınızı silmek istediğinize emin misiniz? Tüm verileriniz silinecek!
                </Text>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#f38ba8' }]}
                    onPress={handleDeleteAccount}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>{loading ? 'Siliniyor...' : 'Hesabımı Sil'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#a6e3a1' }]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>İptal</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#cdd6f4',
        padding: 10,
        borderBottomRightRadius: 80,
    },
    title: {
        fontSize: 32,
        color: '#1e1e2e',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1e1e2e',
    },
    warningText: {
        color: '#cdd6f4',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: '#1e1e2e',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
