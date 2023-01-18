import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryLogo from '../../assets/svg/HistoryLogo';

export function History() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center px-3 bg-gray-100 dark:bg-gray-900">
        <HistoryLogo />

        <Text className="text-gray-500 dark:text-gray-100 font-bold text-2xl">
          Em breve
        </Text>
      </View>
    </SafeAreaView>
  );
}
