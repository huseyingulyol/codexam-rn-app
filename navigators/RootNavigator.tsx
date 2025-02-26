import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./BottomNavigator";
import ExamNameScreen from "../screens/ExamNameScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ExamListScreen from "../screens/ExamListScreen";
import SettingScreen from "../screens/SettingScreen";
import CameraScreen from "../screens/CameraScreen";



export type RootStackParamList = {
  ExamList: undefined;
  ExamName: undefined;
  Login: undefined;
  Register: undefined;
  Setting:undefined;
  Home:undefined;
  Camera:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* ALT NAVİGASYON İÇİN BottomNavigator */}
      
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="ExamList" component={BottomNavigator} />
      <Stack.Screen name="ExamName" component={ExamNameScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      
    </Stack.Navigator>
  );
}
