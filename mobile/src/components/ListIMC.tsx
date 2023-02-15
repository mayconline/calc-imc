import { FlatList, FlatListProps, View } from 'react-native';
import HistoryLogo from '../../assets/svg/HistoryLogo';
import { ResultIMCType } from '../types';
import { Text } from './Text';

export function ListIMC(props: FlatListProps<ResultIMCType>) {
  return (
    <FlatList
      {...props}
      style={{ width: '100%', marginTop: 24 }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      removeClippedSubviews={false}
      initialNumToRender={5}
      maxToRenderPerBatch={1}
      updateCellsBatchingPeriod={600}
      automaticallyAdjustContentInsets={false}
      ListEmptyComponent={
        <View className="justify-center items-center">
          <HistoryLogo />
          <Text className="text-2xl">Nenhum item encontrado</Text>
        </View>
      }
    />
  );
}
