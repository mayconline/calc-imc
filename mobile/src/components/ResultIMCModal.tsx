import {
  ActivityIndicator,
  Modal,
  View,
  Linking,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIMC } from '../hooks/useIMC';
import colors from 'tailwindcss/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'nativewind';
import { ProgressCircle } from 'react-native-svg-charts';
import { Text as TextSVG } from 'react-native-svg';
import { Text } from './Text';

interface ResultIMCModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ResultIMCModal({ visible, onClose }: ResultIMCModalProps) {
  const { colorScheme } = useColorScheme();
  const { lastResultIMC } = useIMC();

  const color = colorScheme === 'light' ? colors.gray[500] : colors.gray[100];

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
      transparent
    >
      <SafeAreaView className="flex-1 justify-end items-stretch">
        <View className="rounded-t-3xl p-6 bg-gray-200 dark:bg-gray-600 h-[54%]">
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
              <View className="w-full flex-1">
                <ProgressCircle
                  style={{ height: 256 }}
                  progress={lastResultIMC.situation.progress}
                  progressColor={lastResultIMC?.situation?.color}
                  startAngle={-Math.PI / 2}
                  endAngle={Math.PI / 2}
                  strokeWidth={16}
                >
                  <TextSVG
                    fill={color}
                    textAnchor={'middle'}
                    alignmentBaseline={'text-top'}
                    fontSize={36}
                    fontWeight="bold"
                  >
                    {lastResultIMC.IMC}
                  </TextSVG>

                  <TextSVG
                    fill={color}
                    textAnchor={'middle'}
                    alignmentBaseline={'text-bottom'}
                    fontSize={24}
                  >
                    {lastResultIMC?.situation?.description}
                  </TextSVG>
                </ProgressCircle>
              </View>

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
