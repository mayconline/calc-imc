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
  const [lastResultIMC, setLastResultIMC] = useState<ResultIMCType>(
    {} as ResultIMCType,
  );

  const handleSetResultIMC = useCallback((resultImc: ResultIMCType) => {
    setResultIMC(prevState => prevState.concat(resultImc));
    setLastResultIMC(resultImc);
  }, []);

  const value = useMemo(
    () => ({
      resultIMC,
      lastResultIMC,
      handleSetResultIMC,
    }),
    [resultIMC, lastResultIMC, handleSetResultIMC],
  );

  return <IMCContext.Provider value={value}>{children}</IMCContext.Provider>;
};
