import {
  Pressable,
  PressableProps,
  Switch,
  View,
  ViewProps,
} from 'react-native';
import { useColorScheme } from 'nativewind';
import colors from 'tailwindcss/colors';
import { Icon } from './Icon';
import { Text } from './Text';

interface ToogleThemeProps extends PressableProps {}

export function ToogleTheme({ ...props }: ToogleThemeProps) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const color = colorScheme === 'light' ? colors.blue[400] : colors.yellow[400];

  return (
    <Pressable
      className="flex-row items-center justify-center"
      onPress={toggleColorScheme}
      android_ripple={{ color: color, radius: 1 }}
      {...props}
    >
      <Icon name="theme-light-dark" color={color} size={24} />

      {colorScheme === 'light' ? (
        <Text className="text-blue-400 font-normal ml-2">Light</Text>
      ) : (
        <Text className="text-yellow-400 font-normal ml-2">Dark</Text>
      )}
    </Pressable>
  );
}
