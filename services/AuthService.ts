import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Çevresel değişkenlerden API URL'yi al (.env kullanıyorsan)
const API_URL = process.env.PUBLIC_API_URL || "https://your-api.com/auth";

export const AuthService = {
  // Kullanıcı giriş yapar ve token saklanır
  login: async (email: string, password: string) => {
    try {
  
      const response = await axios.post(`${API_URL}/login`, { email, password });

      if (response.data && response.data.token) {
        const token = response.data.token;
        await AsyncStorage.setItem("token", token);
        return token;
      } else {
        throw new Error("Giriş başarısız! Token alınamadı.");
      }
    } catch (error: any) {
      console.error("Login Error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Giriş başarısız! Bilgilerinizi kontrol edin.");
    }
  },

  // Yeni kullanıcı kayıt işlemi
  register: async (email: string, password: string) => {
    try {
      console.log(`${API_URL}/values`)
      const response = await axios.get(`${API_URL}/values`);
      console.log(response.data)
      return;
      // const response = await axios.post(`${API_URL}/register`, { email, password });

      if (response.data) {
        return response.data; // Backend'den dönen başarılı kayıt bilgisi
      } else {
        throw new Error("Kayıt başarısız! Yanıt geçersiz.");
      }
    } catch (error: any) {
      console.error("Register Error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Kayıt başarısız! Bilgilerinizi kontrol edin.");
    }
  },

  // Kullanıcı çıkış yapınca token'ı sil
  logout: async () => {
    await AsyncStorage.removeItem("token");
  },

  // AsyncStorage üzerinden token'ı getir
  getToken: async () => {
    return await AsyncStorage.getItem("token");
  },

  // Kullanıcının giriş yapıp yapmadığını kontrol et
  isAuthenticated: async () => {
    const token = await AsyncStorage.getItem("token");
    return !!token; // Eğer token varsa true döner
  },
};
