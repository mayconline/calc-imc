import { useCallback, useContext } from 'react';
import { IMCContext } from '../context/IMCContext';
import { getFormattedIMC } from '../utils/format';

export function useIMC() {
  const { resultIMC, lastResultIMC, handleSetResultIMC, handleResetResultIMC } =
    useContext(IMCContext);

  const handleCalculateIMC = useCallback(
    (height: number, bodyWeight: number) => {
      const heightCentimeterToMeter = height / 100;

      const IMC =
        bodyWeight / (heightCentimeterToMeter * heightCentimeterToMeter);

      const situation = getFormattedIMC(IMC);

      const result = {
        date: new Date(),
        height,
        bodyWeight,
        IMC: IMC.toFixed(1),
        situation,
      };

      handleSetResultIMC(result);

      return result;
    },
    [handleSetResultIMC],
  );

  return {
    resultIMC,
    lastResultIMC,
    handleCalculateIMC,
    handleResetResultIMC,
  };
}
