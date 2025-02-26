import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

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
      }
    }
  };

  // Fotoğrafı backend'e yükleme fonksiyonu
  const uploadPhoto = async () => {
    if (!photoUri) {
      alert("Önce bir fotoğraf çekmelisiniz!");
      return;
    }

    const formData = new FormData();
    formData.append("file", {
      uri: photoUri,
      name: "photo.jpg",
      type: "image/jpeg",
    });

    try {
      const response = await axios.post("https://your-backend.com/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Fotoğraf başarıyla yüklendi!");
    } catch (error) {
      console.error("Yükleme hatası:", error);
      alert("Fotoğraf yüklenirken hata oluştu.");
    }
  };

  return (
    <View style={styles.container}>
      {photoUri ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photoUri }} style={styles.preview} />
          <Button title="Yeniden Çek" onPress={() => setPhotoUri(null)} />
          <Button title="Yükle" onPress={uploadPhoto} />
        </View>
      ) : (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
              <Text style={styles.text}>Capture</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.5)",
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
});
