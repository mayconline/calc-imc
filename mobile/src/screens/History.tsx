import { SafeAreaView } from 'react-native-safe-area-context';
import { ListIMC } from '../components/ListIMC';
import { ListIMCItemMemo } from '../components/ListIMCItem';
import { useIMC } from '../hooks/useIMC';

export function History() {
  const { resultIMC } = useIMC();

  return (
    <SafeAreaView className="flex-1 justify-center items-center px-3 bg-gray-100 dark:bg-gray-900">
      <ListIMC
        data={resultIMC.reverse()}
        keyExtractor={item => `${item.date}-${item.IMC}`}
        renderItem={({ item }) => <ListIMCItemMemo {...item} />}
      />
    </SafeAreaView>
  );
}
