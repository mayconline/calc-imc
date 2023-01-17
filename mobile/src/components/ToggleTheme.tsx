import { Switch, Text, View, ViewProps } from 'react-native';
import { useColorScheme } from 'nativewind';
import colors from 'tailwindcss/colors';
import { Icon } from './Icon';

interface ToogleThemeProps extends ViewProps {}

export function ToogleTheme({ ...props }: ToogleThemeProps) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center" {...props}>
      <Text className="text-yellow-500">Dark</Text>

      <Switch
        trackColor={{ true: colors.blue[400], false: colors.yellow[400] }}
        thumbColor={
          colorScheme === 'light' ? colors.blue[900] : colors.yellow[900]
        }
        onValueChange={toggleColorScheme}
        value={colorScheme === 'light'}
      />

      <Text className="text-blue-400 mr-4">Light</Text>

      <Icon
        name="theme-light-dark"
        color={colorScheme === 'light' ? colors.blue[400] : colors.yellow[400]}
        size={24}
      />
    </View>
  );
}
