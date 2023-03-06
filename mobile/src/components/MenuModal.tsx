import { Fragment } from 'react';
import { Modal, TouchableOpacity, View, Alert } from 'react-native';
import { useColorScheme } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { textColorTheme } from '../utils/textColorTheme';
import { Text } from './Text';
import { Icon } from './Icon';
import { getEmail, getTerms } from '../utils/links';
import { useIMC } from '../hooks/useIMC';
import { useXLS } from '../hooks/useXLS';
import { ActivityIndicator } from 'react-native';

interface MenuModalProps {
  visible: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    icon: 'file-export-outline',
    description: 'Exportar Dados',
    disabled: false,
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
    description: 'Versão do APP - v1.2.0',
    disabled: true,
  },
];

export function MenuModal({ visible, onClose }: MenuModalProps) {
  const { handleResetResultIMC, resultIMC } = useIMC();
  const { colorScheme } = useColorScheme();
  const color = textColorTheme(colorScheme);
  const { handleShareXLS, xlsFile, loading } = useXLS({
    resultIMC,
  });

  const handleMenuItemClick = (description: string) => {
    switch (description) {
      case 'Exportar Dados':
        return xlsFile
          ? handleShareXLS()
          : Alert.alert('Atenção', 'Ocorreu um erro ao exportar');
      case 'Apagar Dados': {
        Alert.alert(
          'Apagar Dados',
          'Você tem certeza que deseja apagar os dados?',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Apagar',
              style: 'destructive',
              onPress: () => {
                handleResetResultIMC();
              },
            },
          ],
        );
        return;
      }
      case 'Termos de Uso':
        return getTerms();
      case 'Contato':
        return getEmail();
      case 'Versão do APP - v1.2.0':
        return;
      default:
        return;
    }
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      transparent
    >
      <SafeAreaView className="flex-1 justify-end items-stretch">
        <View className="rounded-t-3xl p-6 bg-gray-200 dark:bg-gray-700 min-h-[64%]">
          <View className="flex-row justify-between items-center mb-12">
            <Text className="flex-1 text-center">Menu</Text>
            <Icon
              name="close-circle-outline"
              size={36}
              color={color}
              onPress={onClose}
              isPressable
            />
          </View>
          <View className="flex-1 items-start justify-center">
            {menuItems.map(item => (
              <Fragment key={item.description}>
                <TouchableOpacity
                  className="flex-row w-full justify-between items-center py-2"
                  disabled={item.disabled}
                  onPress={() => handleMenuItemClick(item.description)}
                >
                  <View className="flex-row items-center">
                    <Icon name={item.icon} size={36} color={color} />
                    <Text className="font-normal ml-2">{item.description}</Text>
                  </View>
                  {item.description === 'Exportar Dados' && loading && (
                    <ActivityIndicator color={color} size="large" />
                  )}
                </TouchableOpacity>
                <View
                  className="w-full opacity-10 my-1"
                  style={{ borderWidth: 0.6, borderColor: color }}
                />
              </Fragment>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
