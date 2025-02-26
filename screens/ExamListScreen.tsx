import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "ExamList">;

type ExamListScreenParams = {
  examName?: string;
};

export default function ExamListScreen({ navigation, route }: Props) {
  const [exams, setExams] = useState<string[]>([]);

  useEffect(() => {
    loadExams();
  }, []);

  useEffect(() => {
    if (route.params && "examName" in route.params) {
      const newExam = route.params.examName as string;
      setExams((prevExams) => {
        if (!prevExams.includes(newExam)) {
          const updatedExams = [...prevExams, newExam];
          saveExams(updatedExams);
          return updatedExams;
        }
        return prevExams;
      });
  
      loadExams(); // Eklenen sınavı anında yüklemek için ekledik
    }
  }, [route.params]);

  const loadExams = async () => {
    try {
      const storedExams = await AsyncStorage.getItem("exams");
      if (storedExams) {
        setExams(JSON.parse(storedExams));
      }
    } catch (error) {
      Alert.alert("Hata", "Sınavlar yüklenirken hata oluştu.");
    }
  };

  const saveExams = async (updatedExams: string[]) => {
    try {
      await AsyncStorage.setItem("exams", JSON.stringify(updatedExams));
    } catch (error) {
      Alert.alert("Hata", "Sınavlar kaydedilirken hata oluştu.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Sınav Listesi</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {exams.map((exam, index) => (
          <TouchableOpacity
            key={index}
            style={styles.buttonSinav}
            onPress={() => navigation.navigate("ExamSettingsList", { examName: exam })}
          >
            <Text style={styles.buttonText}>{exam}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.buttonCreateExam}
          onPress={() => navigation.navigate("ExamName", { exams })}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2e",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  headerText: {
    fontSize: 32,
    color: "#cdd6f4",
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
  buttonSinav: {
    width: 200,
    height: 80,
    backgroundColor: "#1e1e2e",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#cdd6f4",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonCreateExam: {
    width: 100,
    height: 100,
    backgroundColor: "#45475a",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#cdd6f4",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#cdd6f4",
    fontWeight: "bold",
  },
});