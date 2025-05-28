import { Stack } from "expo-router";
import "./global.css"
//import { useRouter } from 'expo-router';

//  const router = useRouter();
// onPress={() => router.navigate('/about')

export const unstable_settings = {
  initialRouteName: "Welcome/index.tsx",
};

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome/index.tsx"/>
    <Stack.Screen name="profile" />
    <Stack.Screen name="login" options={{
      headerShown: false
    }}/>
    <Stack.Screen name="register" />
    <Stack.Screen name="(tabs)" options={{
      headerShown: false
    }} />
    <Stack.Screen name="(tabs)/home" options={{
      headerShown: false
    }} />
    <Stack.Screen name="(tabs)/travel" options={{
      headerShown: false
    }}  />
    <Stack.Screen name="(tabs)/history" options={{
      headerShown: false
    }} />
    <Stack.Screen name="(tabs)/tour" options={{
      headerShown: false
    }} />
    <Stack.Screen name="(tabs)/hotel" options={{
      headerShown: false
    }} />
    
  </Stack>;
}
