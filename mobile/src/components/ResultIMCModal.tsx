import {
  ActivityIndicator,
  Modal,
  View,
  Linking,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIMC } from '../hooks/useIMC';
import { Text } from './Text';
import { IMCProgressChartMemo } from './IMCProgressChart';
import { useColorScheme } from 'nativewind';
import { textColorTheme } from '../utils/textColorTheme';
import { Icon } from './Icon';

interface ResultIMCModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ResultIMCModal({ visible, onClose }: ResultIMCModalProps) {
  const { lastResultIMC } = useIMC();
  const { colorScheme } = useColorScheme();
  const color = textColorTheme(colorScheme);

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
      transparent
    >
      <SafeAreaView className="flex-1 justify-end items-stretch">
        <View className="rounded-t-3xl p-6 bg-gray-200 dark:bg-gray-700 min-h-[54%]">
          <View className="self-end">
            <Icon
              name="close-circle-outline"
              size={36}
              color={color}
              onPress={onClose}
            />
          </View>

          {!lastResultIMC?.situation?.progress ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator color={color} size="large" />
            </View>
          ) : (
            <>
              <IMCProgressChartMemo item={lastResultIMC} textColor={color} />

              <Pressable
                className="justify-end items-center"
                onPress={() =>
                  Linking.openURL(
                    'https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations',
                  )
                }
              >
                <Text className="font-normal text-sm italic underline">
                  fonte: OMS ( Organização Mundial da Saúde )
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
