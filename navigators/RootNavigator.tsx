import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import BackButton from '../components/BackButton';




export type RootStackParamList = {
  
  Register:undefined;
  Login:undefined;
  Home:undefined;

  
};

const Stack = createNativeStackNavigator();


export default function RootNavigator() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
  );
 }