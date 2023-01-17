import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from 'tailwindcss/colors';
import { useColorScheme } from 'nativewind';

import { Home } from '../screens/Home';
import { Icon } from '../components/Icon';
import { History } from '../screens/History';
import { Header } from '../components/Header';

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  const { colorScheme } = useColorScheme();

  return (
    <NavigationContainer>
      <Header />
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor:
              colorScheme === 'light' ? colors.gray[200] : colors.gray[800],
            borderTopWidth: 0,
          },
          tabBarActiveTintColor:
            colorScheme === 'light' ? colors.blue[400] : colors.yellow[400],
          tabBarInactiveTintColor: colors.gray[400],
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: {
            padding: 2,
          },
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="weight-lifter" color={color} size={32} />
            ),
            tabBarLabel: 'IMC',
          }}
        />

        <Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="history" color={color} size={32} />
            ),
            tabBarLabel: 'Histórico',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
