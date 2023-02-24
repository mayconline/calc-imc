import { useColorScheme } from 'nativewind';
import { Modal, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { textColorTheme } from '../utils/textColorTheme';
import { Text } from './Text';
import { Icon } from './Icon';

interface MenuModalProps {
  visible: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    icon: 'file-export-outline',
    description: 'Exportar Dados',
    disabled: true,
  },
  {
    icon: 'delete-forever',
    description: 'Apagar Dados',
    disabled: false,
  },
  {
    icon: 'shield-check',
    description: 'Termos de Uso',
    disabled: false,
  },
  {
    icon: 'chat-question',
    description: 'Contato',
    disabled: false,
  },
  {
    icon: 'apps',
    description: 'Versão do APP - v1.0.0',
    disabled: true,
  },
];

export function MenuModal({ visible, onClose }: MenuModalProps) {
  const { colorScheme } = useColorScheme();
  const color = textColorTheme(colorScheme);

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      transparent
    >
      <SafeAreaView className="flex-1 justify-end items-stretch">
        <View className="rounded-t-3xl p-6 bg-gray-200 dark:bg-gray-700 min-h-[54%]">
          <View className="flex-row justify-between items-center">
            <Text className="flex-1 text-center">Menu</Text>
            <Icon
              name="close-circle-outline"
              size={36}
              color={color}
              onPress={onClose}
            />
          </View>
          <View className="flex-1 items-start justify-center">
            {menuItems.map(item => (
              <>
                <TouchableOpacity
                  key={item.description}
                  className="flex-row w-full items-center py-2"
                  disabled={item.disabled}
                >
                  <Icon name={item.icon} size={36} color={color} />
                  <Text className="font-normal ml-2">{item.description}</Text>
                </TouchableOpacity>
                <View
                  className="w-full opacity-10 my-1"
                  style={{ borderWidth: 0.6, borderColor: color }}
                />
              </>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
