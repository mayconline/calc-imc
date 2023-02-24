import { useColorScheme } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMCProgressChartMemo } from '../components/IMCProgressChart';
import { ListIMC } from '../components/ListIMC';
import { ListIMCItemMemo } from '../components/ListIMCItem';
import { useIMC } from '../hooks/useIMC';
import { textColorTheme } from '../utils/textColorTheme';

export function History() {
  const { resultIMC, lastResultIMC } = useIMC();
  const { colorScheme } = useColorScheme();
  const color = textColorTheme(colorScheme);

  return (
    <SafeAreaView className="flex-1 justify-center items-center px-3 bg-gray-100 dark:bg-gray-900">
      <ListIMC
        data={resultIMC.reverse()}
        keyExtractor={item => `${item.date}-${item.IMC}`}
        renderItem={({ item }) => <ListIMCItemMemo {...item} />}
        ListHeaderComponent={() =>
          resultIMC?.length ? (
            <IMCProgressChartMemo item={lastResultIMC} textColor={color} />
          ) : null
        }
        ListHeaderComponentStyle={{
          marginTop: 24,
        }}
      />
    </SafeAreaView>
  );
}
