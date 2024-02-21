'use client';
import { useEffect, useState } from 'react';

export function useLocalState<T>(
  key: string,
  initialValue?: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const storageItem = localStorage.getItem(key);
      return storageItem ? JSON.parse(storageItem) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
