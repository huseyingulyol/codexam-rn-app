import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigators/RootNavigator';
import { AuthProvider } from "./context/AuthContext"; // ✅ AuthContext için doğru yolu düzelttik

export default function App() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
