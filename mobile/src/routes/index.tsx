import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { IMCProvider } from '../context/IMCContext';

import { Header } from '../components/Header';
import { AppRoutes } from './app.routes';
import { StatusBar } from 'react-native';
import { useColorScheme } from 'nativewind';
import colors from 'tailwindcss/colors';
import { ResultIMCModal } from '../components/ResultIMCModal';

export function Routes() {
  const { colorScheme } = useColorScheme();

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <IMCProvider>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={
            colorScheme === 'dark' ? colors.gray[900] : colors.gray[100]
          }
        />
        <Header />
        <AppRoutes />
        <ResultIMCModal />
      </IMCProvider>
    </NavigationContainer>
  );
}
