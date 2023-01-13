import { FormEvent, useState } from 'react';
import { useIMC } from '../hooks/useIMC';

import { FormValue } from '../types';

import { Button } from './button';
import { Input } from './input';

export function IMCForm() {
  const { handleCalculateIMC } = useIMC();

  const [formValue, setFormValue] = useState<FormValue>({
    bodyWeight: '',
    height: '',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!formValue.height || !formValue.bodyWeight) return;

    handleCalculateIMC(Number(formValue.height), Number(formValue.bodyWeight));

    setFormValue({ bodyWeight: '', height: '' });
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-sm"
      onSubmit={handleSubmit}
    >
      <Input
        label="Peso em kg"
        name="bodyWeight"
        type="number"
        placeholder="Informe seu peso em kg"
        value={formValue.bodyWeight}
        onChange={(e) =>
          setFormValue((prevState) => ({
            ...prevState,
            bodyWeight: e.target.value,
          }))
        }
      />

      <Input
        label="Altura em cm"
        name="height"
        type="number"
        placeholder="Informe sua altura em cm"
        value={formValue.height}
        onChange={(e) =>
          setFormValue((prevState) => ({
            ...prevState,
            height: e.target.value,
          }))
        }
      />

      <Button type="submit">Calcular IMC</Button>
    </form>
  );
}
