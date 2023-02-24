import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IMCContextType, ResultIMCType } from '../types';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const IMCContext = createContext({} as IMCContextType);

interface IMCProviderProps {
  children: ReactNode;
}

const keyStorage = '@historyIMC';

export const IMCProvider = ({ children }: IMCProviderProps) => {
  const [resultIMC, setResultIMC] = useState<ResultIMCType[]>([]);
  const [lastResultIMC, setLastResultIMC] = useState<ResultIMCType>(
    {} as ResultIMCType,
  );

  useEffect(() => {
    const handleGetLocalStorage = async () => {
      const data = await getLocalStorage(keyStorage);

      if (data) {
        const parsedData = JSON.parse(data) as ResultIMCType[];
        setResultIMC(parsedData);
        setLastResultIMC(parsedData[0]);
      }
    };

    handleGetLocalStorage();
  }, []);

  const handleSetLocalStorage = useCallback(
    async (resultImc: ResultIMCType) => {
      const data = await getLocalStorage(keyStorage);

      if (data) {
        await setLocalStorage(
          keyStorage,
          JSON.stringify([resultImc, ...JSON.parse(data)]),
        );
      } else {
        await setLocalStorage(keyStorage, JSON.stringify([resultImc]));
      }
    },
    [],
  );

  const handleSetResultIMC = useCallback(
    (resultImc: ResultIMCType) => {
      setResultIMC(prevState => [resultImc, ...prevState]);
      setLastResultIMC(resultImc);
      handleSetLocalStorage(resultImc);
    },
    [handleSetLocalStorage],
  );

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
