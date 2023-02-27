import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMCLineChartMemo } from '../components/IMCLineChart';
import { IMCProgressChartMemo } from '../components/IMCProgressChart';
import { Indicator } from '../components/indicator';
import { ListIMC } from '../components/ListIMC';
import { ListIMCItemMemo } from '../components/ListIMCItem';

import { useIMC } from '../hooks/useIMC';
import { textColorTheme } from '../utils/textColorTheme';

export function History() {
  const [selectedChart, setSelectedChart] = useState<'PROGRESS' | 'LINE'>(
    'LINE',
  );

  const { resultIMC, lastResultIMC } = useIMC();
  const { colorScheme } = useColorScheme();
  const color = textColorTheme(colorScheme);

  return (
    <SafeAreaView className="flex-1 justify-center items-center px-3 bg-gray-100 dark:bg-gray-900">
      {resultIMC?.length > 1 && (
        <TouchableOpacity
          className="w-full"
          onPress={() =>
            setSelectedChart(prevState =>
              prevState === 'LINE' ? 'PROGRESS' : 'LINE',
            )
          }
        >
          {selectedChart === 'LINE' && (
            <IMCLineChartMemo
              data={resultIMC}
              textColor={color}
              lastResult={lastResultIMC}
            />
          )}

          {selectedChart === 'PROGRESS' && (
            <IMCProgressChartMemo
              item={lastResultIMC}
              textColor={color}
              isHistory
            />
          )}

          <View className="flex-row w-full justify-center mb-4">
            <Indicator active={selectedChart === 'PROGRESS'} />
            <Indicator active={selectedChart === 'LINE'} />
          </View>
        </TouchableOpacity>
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
