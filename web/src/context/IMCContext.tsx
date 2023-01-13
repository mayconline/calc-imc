import { createContext, ReactNode, useState } from 'react';
import { IMCContextType, ResultIMCType } from '../types';

export const IMCContext = createContext({} as IMCContextType);

interface IMCProviderProps {
  children: ReactNode;
}

export const IMCProvider = ({ children }: IMCProviderProps) => {
  const [resultIMC, setResultIMC] = useState<ResultIMCType[]>([]);

  const handleSetResultIMC = (resultIMC: ResultIMCType) => {
    setResultIMC((prevState) => prevState.concat(resultIMC));
  };

  return (
    <IMCContext.Provider value={{ resultIMC, handleSetResultIMC }}>
      {children}
    </IMCContext.Provider>
  );
};
