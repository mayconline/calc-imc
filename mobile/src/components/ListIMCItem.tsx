import { memo } from 'react';
import { View } from 'react-native';
import { ResultIMCType } from '../types';
import { getFormattedDate } from '../utils/format';
import { Text } from './Text';

function ListIMCItem(item: ResultIMCType) {
  return (
    <View
      className="rounded-2xl my-2 px-4 py-2"
      style={{ borderColor: item.situation.color, borderWidth: 1 }}
    >
      <View className="flex-row justify-between p-1">
        <Text className="text-2xl">{item.IMC}</Text>
        <Text className="font-normal">
          {item.bodyWeight} kg / {item.height} cm
        </Text>
      </View>

      <View className="flex-row justify-between p-1">
        <Text>{item.situation.description}</Text>
        <Text className="font-normal">{getFormattedDate(item.date)}</Text>
      </View>
    </View>
  );
}

export const ListIMCItemMemo = memo(ListIMCItem);
