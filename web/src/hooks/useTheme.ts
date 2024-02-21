'use client';
import { useCallback, useEffect, useState } from 'react';
import { useLocalState } from '@/hooks/useLocalState';

export function useTheme() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useLocalState<'light' | 'dark'>('@imcCalcTheme');

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  const handleSetThemeClass = useCallback(() => {
    try {
      const navigatorDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (theme === 'dark' || (!theme && navigatorDarkTheme)) {
        document.documentElement.classList.add('dark');
        setTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        setTheme('light');
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setTheme, theme]);

  useEffect(() => {
    handleSetThemeClass();
  }, [handleSetThemeClass]);

  return {
    theme,
    loading,
    handleToggleTheme,
  };
}
