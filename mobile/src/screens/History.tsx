import { useColorScheme } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMCLineChartMemo } from '../components/IMCLineChart';
import { ListIMC } from '../components/ListIMC';
import { ListIMCItemMemo } from '../components/ListIMCItem';
import { useIMC } from '../hooks/useIMC';
import { textColorTheme } from '../utils/textColorTheme';

export function History() {
  const { resultIMC } = useIMC();
  const { colorScheme } = useColorScheme();
  const color = textColorTheme(colorScheme);

  return (
    <SafeAreaView className="flex-1 justify-center items-center px-3 bg-gray-100 dark:bg-gray-900">
      {resultIMC?.length > 0 && (
        <IMCLineChartMemo data={resultIMC} textColor={color} />
      )}
      <ListIMC
        data={resultIMC}
        keyExtractor={item => `${item.date}-${item.IMC}`}
        renderItem={({ item }) => <ListIMCItemMemo {...item} />}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
      />
    </SafeAreaView>
  );
}
