import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { IMCContextType, ResultIMCType } from '../types';

export const IMCContext = createContext({} as IMCContextType);

interface IMCProviderProps {
  children: ReactNode;
}

export const IMCProvider = ({ children }: IMCProviderProps) => {
  const [resultIMC, setResultIMC] = useState<ResultIMCType[]>([]);

  const handleSetResultIMC = useCallback((resultIMC: ResultIMCType) => {
    setResultIMC((prevState) => prevState.concat(resultIMC));
  }, []);

  const value = useMemo(
    () => ({
      resultIMC,

      handleSetResultIMC,
    }),
    [resultIMC, handleSetResultIMC]
  );

  return <IMCContext.Provider value={value}>{children}</IMCContext.Provider>;
};
