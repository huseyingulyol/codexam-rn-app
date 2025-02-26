import ExamListScreen from "../screens/ExamListScreen";
import SettingScreen from "../screens/SettingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "ExamList") {
            iconName = "book-outline"; // 'book' yerine 'book-outline' kullan
          } else if (route.name === "Setting") {
            iconName = "person-outline";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: "#313244", height: 60 },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#999",
      })}
    >
      <Tab.Screen name="ExamList" component={ExamListScreen} options={{ title: "Sınav Listesi" }} />
      <Tab.Screen name="Setting" component={SettingScreen} options={{ title: "Ayarlar" }} />
    </Tab.Navigator>
  );
}

