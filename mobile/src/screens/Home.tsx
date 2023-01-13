import { KeyboardAvoidingView, Text } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { ToogleTheme } from '../components/ToggleTheme';
import Logo from '../../assets/svg/Logo';

export function Home() {
  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center items-center px-4"
      behavior="padding"
    >
      <ToogleTheme className="mb-8" />

      <Logo className="h-40 w-64" />

      <Text className=" text-gray-500 dark:text-gray-100 font-bold text-2xl">
        Calculadora de IMC
      </Text>

      <Input
        label="Peso em kg"
        keyboardType="number-pad"
        placeholder="Informe seu peso em kg"
      />
      <Input
        label="Altura em cm"
        keyboardType="number-pad"
        placeholder="Informe sua altura em cm"
      />

      <Button className="w-full mt-8" onPress={() => console.log('aquiuiui')}>
        Calcular
      </Button>
    </KeyboardAvoidingView>
  );
}
