import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../screens/RegisterScreen";




export type RootStackParamList = {
  
  Register:undefined;
  
};

const Stack = createNativeStackNavigator();


export default function RootNavigator() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
  );
 }