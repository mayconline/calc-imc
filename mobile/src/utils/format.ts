import dayjs from 'dayjs';
import colors from 'tailwindcss/colors';

export const getFormattedDate = (date: Date) => {
  return dayjs(date).format('DD/MM/YY [às] HH:mm');
};

export const getFormattedIMC = (IMC: number) => {
  if (IMC < 23) {
    return {
      description: 'Peso abaixo da normalidade',
      color: colors.yellow[400],
      progress: 0.25,
    };
  } else if (IMC >= 23 && IMC <= 31) {
    return {
      description: 'Peso normal',
      color: colors.green[400],
      progress: 0.5,
    };
  } else if (IMC > 31 && IMC <= 35) {
    return {
      description: 'Peso acima da normalidade',
      color: colors.orange[500],
      progress: 0.75,
    };
  } else {
    return {
      description: 'Obesidade',
      color: colors.red[600],
      progress: 1,
    };
  }
};
