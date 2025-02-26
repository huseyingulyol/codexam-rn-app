import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./BottomNavigator";
import ExamNameScreen from "../screens/ExamNameScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ExamListScreen from "../screens/ExamListScreen";
import SettingScreen from "../screens/SettingScreen";
import AccountScreen from "../screens/AccountScreen";
import DeleteAccountScreen from "../screens/DeleteAccountScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import CameraPageScreen from "../screens/CameraPageScreen";
import CameraScreen from "../screens/CameraScreen";




export type RootStackParamList = {
  ExamList: undefined;
  ExamName: undefined;
  Login: undefined;
  Register: undefined;
  Setting:undefined;
  Home:undefined;
  Account:undefined;
  DeleteAccount:undefined;
  ChangePassword:undefined;
  CameraPage:undefined;
  Camera:undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* ALT NAVİGASYON İÇİN BottomNavigator */}
      <Stack.Screen name="ExamName" component={ExamNameScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ExamList" component={BottomNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="CameraPage" component={CameraPageScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}
