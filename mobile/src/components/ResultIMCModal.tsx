import { ActivityIndicator, Modal, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIMC } from '../hooks/useIMC';
import colors from 'tailwindcss/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'nativewind';
import { ProgressCircle } from 'react-native-svg-charts';
import { Text } from './Text';

interface ResultIMCModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ResultIMCModal({ visible, onClose }: ResultIMCModalProps) {
  const { colorScheme } = useColorScheme();
  const { lastResultIMC } = useIMC();

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      transparent
    >
      <SafeAreaView className="flex-1 justify-end items-stretch">
        <View className="rounded-t-3xl p-6 bg-gray-200 dark:bg-gray-600 h-[50%]">
          <Icon
            name="close-circle-outline"
            size={36}
            color={colorScheme === 'dark' ? colors.gray[100] : colors.gray[500]}
            onPress={onClose}
            style={{ alignSelf: 'flex-end' }}
          />

          {!lastResultIMC?.situation?.progress ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator
                color={
                  colorScheme === 'dark' ? colors.gray[100] : colors.gray[500]
                }
                size="large"
              />
            </View>
          ) : (
            <>
              <View className="w-full flex-1">
                <ProgressCircle
                  style={{ height: 200 }}
                  progress={lastResultIMC.situation.progress}
                  progressColor={lastResultIMC?.situation?.color}
                  startAngle={-Math.PI / 2}
                  endAngle={Math.PI / 2}
                  strokeWidth={8}
                />
              </View>

              <View className="flex-1 items-center justify-center">
                <Text className="text-4xl">{lastResultIMC?.IMC}</Text>

                <Text className="font-normal text-xl">
                  {lastResultIMC?.situation?.description}
                </Text>
              </View>
            </>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
