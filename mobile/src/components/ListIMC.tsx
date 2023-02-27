import { FlatList, FlatListProps, View } from 'react-native';
import HistoryLogo from '../../assets/svg/HistoryLogo';
import { ResultIMCType } from '../types';
import { Text } from './Text';

export function ListIMC(props: FlatListProps<ResultIMCType>) {
  return (
    <FlatList
      {...props}
      style={{ width: '100%' }}
      removeClippedSubviews={false}
      automaticallyAdjustContentInsets={false}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View className="justify-center items-center">
          <HistoryLogo />
          <Text className="text-2xl">Nenhum item encontrado</Text>
        </View>
      }
    />
  );
}
