import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default () => {
  const HomeIcon = (size: number) => <Ionicons size={size} name='home' />;
  const SettingsIcon = (size: number) => (
    <AntDesign size={size} name='setting' />
  );
  return (
    <Tabs>
      <Tabs.Screen
        name='home'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size }) => HomeIcon(size),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ size }) => SettingsIcon(size),
        }}
      />
    </Tabs>
  );
};
