import colors from 'tailwindcss/colors';

export const textColorTheme = (colorScheme = 'light') =>
  colorScheme === 'light' ? colors.gray[500] : colors.gray[100];

export const ToggleColorTheme = (colorScheme = 'light') =>
  colorScheme === 'light' ? colors.blue[400] : colors.yellow[400];
