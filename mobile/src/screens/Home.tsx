import { KeyboardAvoidingView, SafeAreaView, Text } from 'react-native';
import { Header } from '../components/Header';
import { IMCForm } from '../components/IMCForm';
import Logo from '../../assets/svg/Logo';

export function Home() {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <KeyboardAvoidingView
        className="flex-1 justify-center items-center px-3 bg-gray-100 dark:bg-gray-900"
        behavior="padding"
      >
        <Logo className="h-40 w-64" />

        <Text className="text-gray-500 dark:text-gray-100 font-bold text-2xl">
          Calculadora de IMC
        </Text>

        <IMCForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
