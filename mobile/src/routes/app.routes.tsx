import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'nativewind';
import colors from 'tailwindcss/colors';

import { Home } from '../screens/Home';
import { Icon } from '../components/Icon';
import { History } from '../screens/History';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colorScheme } = useColorScheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          backgroundColor:
            colorScheme === 'light' ? colors.gray[200] : colors.gray[800],
          borderTopWidth: 0,
        },
        tabBarActiveTintColor:
          colorScheme === 'light' ? colors.blue[400] : colors.yellow[400],
        tabBarInactiveTintColor: colors.gray[400],
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="weight-lifter" color={color} size={size} />
          ),
          tabBarLabel: 'IMC',
        }}
      />

      <Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" color={color} size={size} />
          ),
          tabBarLabel: 'Histórico',
        }}
      />
    </Navigator>
  );
}
