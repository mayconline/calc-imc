import { useState } from 'react';
import { View } from 'react-native';
import { useIMC } from '../hooks/useIMC';
import { FormValue } from '../types';
import { getReplaceCommaToDot } from '../utils/format';
import { Button } from './Button';
import { Input } from './Input';
import { ResultIMCModal } from './ResultIMCModal';

export function IMCForm() {
  const { handleCalculateIMC } = useIMC();

  const [formValue, setFormValue] = useState<FormValue>({
    bodyWeight: '',
    height: '',
  });
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = () => {
    if (!formValue.height || !formValue.bodyWeight) {
      return;
    }

    try {
      handleCalculateIMC(
        getReplaceCommaToDot(formValue.height),
        getReplaceCommaToDot(formValue.bodyWeight),
      );

      setFormValue({ bodyWeight: '', height: '' });
      setOpenModal(true);
    } catch (err) {
      throw new Error(`BMI calculation error: ${err}`);
    }
  };

  return (
    <>
      <View className="w-full">
        <Input
          label="Peso em kg"
          keyboardType="number-pad"
          placeholder="Informe seu peso em kg"
          value={formValue.bodyWeight}
          onChangeText={bodyWeight =>
            setFormValue(prevState => ({ ...prevState, bodyWeight }))
          }
        />
        <Input
          label="Altura em cm"
          keyboardType="number-pad"
          placeholder="Informe sua altura em cm"
          value={formValue.height}
          onChangeText={height =>
            setFormValue(prevState => ({ ...prevState, height }))
          }
        />

        <Button className="w-full mt-8" onPress={handleSubmit}>
          Calcular
        </Button>
      </View>

      <ResultIMCModal visible={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
