import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { IMCProvider } from '../context/IMCContext';

import { Header } from '../components/Header';
import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Header />
      <IMCProvider>
        <AppRoutes />
      </IMCProvider>
    </NavigationContainer>
  );
}
