import { createContext, ReactNode, useCallback, useState } from 'react';
import { IMCContextType, ResultIMCType } from '../types';

export const IMCContext = createContext({} as IMCContextType);

interface IMCProviderProps {
  children: ReactNode;
}

export const IMCProvider = ({ children }: IMCProviderProps) => {
  const [resultIMC, setResultIMC] = useState<ResultIMCType[]>([]);
  const [lastResultIMC, setLastResultIMC] = useState<ResultIMCType>(
    {} as ResultIMCType,
  );

  const handleSetResultIMC = useCallback((resultImc: ResultIMCType) => {
    setResultIMC(prevState => prevState.concat(resultImc));
    setLastResultIMC(resultImc);
  }, []);

  return (
    <IMCContext.Provider
      value={{ resultIMC, handleSetResultIMC, lastResultIMC }}
    >
      {children}
    </IMCContext.Provider>
  );
};
