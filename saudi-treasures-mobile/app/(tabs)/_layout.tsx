import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Tabs } from 'expo-router';
import { PRIMARY_COLOR } from '@/Utils/constants';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: PRIMARY_COLOR, headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Foundation size={28} name="home" color={color} />,
        }}
      />
       <Tabs.Screen
      name="travel"
      options={{
        title: 'Travel',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="airplane-takeoff" color={color} />,
      }}
    />
    <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="credit-card-clock" color={color} />,
        }}
      />
    <Tabs.Screen
        name="tour"
        //component={require('./tour').default}
        options={{
        title: 'Tour',
        tabBarIcon: ({ color }) => <MaterialIcons size={28} name="travel-explore" color={color} />,
        }}
    />
    <Tabs.Screen
            name="hotel"
            options={{
            title: 'Hotel',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="bus-sharp" color={color} />,
            }}
        />
    </Tabs>
  );
}
