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
import { useShareScreenshot } from '../hooks/useShareScreenshot';
import { getFormattedDate } from '../utils/format';

export function ResultIMCModal() {
  const { lastResultIMC, openResultModal, toggleResultModal } = useIMC();
  const { ViewShot, viewRef, handleShareScreenShot } = useShareScreenshot();
  const { colorScheme } = useColorScheme();
  const color = textColorTheme(colorScheme);

  return (
    <Modal
      visible={openResultModal}
      onRequestClose={toggleResultModal}
      animationType="fade"
      transparent
    >
      <SafeAreaView className="flex-1 justify-end items-stretch">
        <ViewShot ref={viewRef}>
          <View
            className="rounded-t-3xl p-6 bg-gray-200 dark:bg-gray-700 min-h-[53%]"
            style={{ elevation: 2 }}
          >
            <View className="flex-row justify-between">
              <Icon
                name="share-variant-outline"
                size={36}
                color={color}
                onPress={handleShareScreenShot}
                isPressable
              />

              <Icon
                name="close-circle-outline"
                size={36}
                color={color}
                onPress={toggleResultModal}
                isPressable
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
                  <Text className="font-normal text-sm italic mt-1">
                    Resultado em {getFormattedDate(lastResultIMC.date, true)}
                  </Text>
                </Pressable>
              </>
            )}
          </View>
        </ViewShot>
      </SafeAreaView>
    </Modal>
  );
}
