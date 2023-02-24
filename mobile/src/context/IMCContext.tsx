import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IMCContextType, ResultIMCType } from '../types';
import { KEY_STORAGE } from '../utils/constant';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../utils/localStorage';

export const IMCContext = createContext({} as IMCContextType);

interface IMCProviderProps {
  children: ReactNode;
}

export const IMCProvider = ({ children }: IMCProviderProps) => {
  const [resultIMC, setResultIMC] = useState<ResultIMCType[]>([]);
  const [lastResultIMC, setLastResultIMC] = useState<ResultIMCType>(
    {} as ResultIMCType,
  );

  useEffect(() => {
    const handleGetLocalStorage = async () => {
      const data = await getLocalStorage(KEY_STORAGE);

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
      const data = await getLocalStorage(KEY_STORAGE);

      if (data) {
        await setLocalStorage(
          KEY_STORAGE,
          JSON.stringify([resultImc, ...JSON.parse(data)]),
        );
      } else {
        await setLocalStorage(KEY_STORAGE, JSON.stringify([resultImc]));
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

  const handleResetResultIMC = useCallback(async () => {
    setLastResultIMC({} as ResultIMCType);
    setResultIMC([]);
    await removeLocalStorage(KEY_STORAGE);
  }, []);

  const value = useMemo(
    () => ({
      resultIMC,
      lastResultIMC,
      handleSetResultIMC,
      handleResetResultIMC,
    }),
    [resultIMC, lastResultIMC, handleSetResultIMC, handleResetResultIMC],
  );

  return <IMCContext.Provider value={value}>{children}</IMCContext.Provider>;
};
