import { memo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useIMC } from '../hooks/useIMC';
import { ResultIMCType } from '../types';
import { getFormattedDate } from '../utils/format';
import { Text } from './Text';

function ListIMCItem(item: ResultIMCType) {
  const { handleSetLastResultIMC, toggleResultModal } = useIMC();

  const handlePressIMC = () => {
    handleSetLastResultIMC(item);
    toggleResultModal();
  };

  return (
    <TouchableOpacity
      className={
        'rounded-2xl my-2 px-4 py-1 bg-gray-200 dark:bg-gray-600 border-l-8'
      }
      style={{
        borderLeftColor: item.situation.color,
        borderBottomColor: item.situation.color,
        elevation: 1,
      }}
      onPress={handlePressIMC}
    >
      <View className="flex-row justify-between p-1">
        <Text className="text-2xl">{item.IMC}</Text>
        <Text className="font-normal">
          {item.bodyWeight} kg / {item.height} cm
        </Text>
      </View>

      <View className="flex-row justify-between p-1">
        <Text className="text-lg">{item.situation.description}</Text>
        <Text className="font-normal">{getFormattedDate(item.date)}</Text>
      </View>
    </TouchableOpacity>
  );
}

export const ListIMCItemMemo = memo(ListIMCItem);
