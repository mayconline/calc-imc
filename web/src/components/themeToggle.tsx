'use client';
import { SunIcon, MoonIcon } from '@heroicons/react/16/solid';
import { useTheme } from '@/hooks/useTheme';
import { Switch } from '@/components';

export function ThemeToggle() {
  const { theme, loading, handleToggleTheme } = useTheme();

  const hasChecked = theme === 'light';

  return loading ? null : (
    <Switch
      checked={hasChecked}
      setChecked={handleToggleTheme}
      customIcon={{
        activeIcon: <SunIcon className="w-5 h-5" />,
        inactiveIcon: <MoonIcon className="w-5 h-5" />,
      }}
    />
  );
}
