import { SafeAreaView } from 'react-native';
import { Home } from '../screens/Home';

export function Routes() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-gray-900">
      <Home />
    </SafeAreaView>
  );
}
