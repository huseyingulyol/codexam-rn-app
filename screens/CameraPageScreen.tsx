import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../navigators/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker';

type Props = BottomTabScreenProps<RootStackParamList, "ExamName">;

export default function ExamNameScreen({ navigation }: Props) {
  
  const handleOpenCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted) {
      navigation.navigate("Camera");
    } else {
      alert("Kamera izni verilmedi!");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      
      <View style={styles.container}>
      <BackButton navigation={navigation} />

        <Text style={{marginVertical:60,...styles.title}}>Çözümsüz Sınav Kağıtlarını Tanımla</Text>

        <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
          <Text style={styles.buttonText}>Başla!</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f7fc",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1e1e2e",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#5c6bc0",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
