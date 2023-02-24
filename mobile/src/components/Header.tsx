import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { View } from 'react-native';
import IMCLogo from '../../assets/svg/IMCLogo';
import { textColorTheme } from '../utils/textColorTheme';
import { Icon } from './Icon';
import { MenuModal } from './MenuModal';
import { Text } from './Text';
import { ToogleTheme } from './ToggleTheme';

export function Header() {
  const [openModal, setOpenModal] = useState(false);

  const { colorScheme } = useColorScheme();
  const color = textColorTheme(colorScheme);

  return (
    <>
      <View className="flex-row justify-between items-center bg-gray-200 dark:bg-gray-800 w-full p-3">
        <View className="flex-row justify-center items-center">
          <IMCLogo />
          <Text className="text-xl ml-2">IMC Calc</Text>
        </View>

        <View className="flex-row justify-center items-center">
          <ToogleTheme className="mr-6" />
          <Icon
            name="dots-vertical"
            size={36}
            color={color}
            onPress={() => setOpenModal(true)}
          />
        </View>
      </View>
      <MenuModal visible={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
