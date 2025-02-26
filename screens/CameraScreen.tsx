import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // İkonlar için Ionicons'ı kullanıyoruz

export default function CameraScreen({navigation}: any) {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(true); // Kamera aktif mi kontrolü

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to use the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  // Kamera yönünü değiştir
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  // Fotoğraf çekme fonksiyonu
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo) {
        setPhotoUri(photo.uri);
        setIsCameraActive(false); // Fotoğraf çekildikten sonra kamerayı durdur
      }
    }
  };

  // Kamera akışını yeniden başlat
  const restartCamera = () => {
    setIsCameraActive(true);
    setPhotoUri(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Sol üstte geri butonu ve başlık */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => {
            navigation.navigate("ExamList")
          }}>
            <Text style={styles.text}>Geri</Text>
          </TouchableOpacity>
          <Text style={styles.title}>1.Kişinin 1.Sayfası</Text>
        </View>

        {/* Kamera görüntüsü ortada */}
        {photoUri ? (
          <View style={styles.previewContainer}>
            <Image source={{ uri: photoUri }} style={styles.preview} />
            <TouchableOpacity style={styles.restartButton} onPress={restartCamera}>
              <Ionicons name="refresh" size={40} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          isCameraActive && (
            <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                  <Ionicons name="camera-reverse" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                  <Ionicons name="camera" size={50} color="white" />
                </TouchableOpacity>
              </View>
            </CameraView>
          )
        )}

        {/* Fotoğraf çekme, önceki ve sonraki butonlar */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Ionicons name="arrow-back-circle" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Ionicons name="camera" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Ionicons name="arrow-forward-circle" size={30} color="white" />
          </TouchableOpacity>
        </View>
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
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  backButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  captureButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  previewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  preview: {
    width: 300,
    height: 400,
    marginBottom: 20,
  },
  restartButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
    padding: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  footerButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 5,
  },
});
