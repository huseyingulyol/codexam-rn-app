import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ExamListScreen from "../screens/ExamListScreen";
import ExamNameScreen from "../screens/ExamNameScreen";
import SettingScreen from "../screens/SettingScreen";




export type RootStackParamList = {
  
  Register:undefined;
  Login:undefined;
  Home:undefined;
  ExamList:undefined;
  ExamName:undefined;
  Setting:undefined;

  
};

const Stack = createNativeStackNavigator();


export default function RootNavigator() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ExamList" component={ExamListScreen} />
        <Stack.Screen name="ExamName" component={ExamNameScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />

        </Stack.Navigator>
  );
 }