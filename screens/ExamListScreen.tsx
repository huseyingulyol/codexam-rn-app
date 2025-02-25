import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootNavigator";
import React from "react";

type Props = NativeStackScreenProps<RootStackParamList, "ExamList">;

export default function ExamListScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Sınav Listesi</Text>

      <View style={styles.examList}>
        <TouchableOpacity style={styles.buttonSinav} onPress={() => navigation.navigate("ExamName")}>
          <Text style={styles.buttonText}>Sınav Adı</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCreateExam} onPress={() => navigation.navigate("ExamName")}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2e",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    fontSize: 40,
    color: "white",
    marginVertical: 20,
  },
  examList: {
    backgroundColor: "#313244",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonSinav: {
    width: 120,
    height: 120,
    backgroundColor: "#1e1e2e",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonCreateExam: {
    width: 100,
    height: 100,
    backgroundColor: "#45475a",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    padding: 20,
    fontSize: 50,
    color: "#cdd6f4",
  },
});
