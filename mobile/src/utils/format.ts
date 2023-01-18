import dayjs from 'dayjs';
import colors from 'tailwindcss/colors';

export const getFormattedDate = (date: Date) => {
  return dayjs(date).format('DD/MM/YY [às] HH:mm');
};

export const getFormattedIMC = (IMC: number) => {
  if (IMC < 18.5) {
    return {
      description: 'Abaixo do peso',
      color: colors.yellow[400],
      progress: 0.25,
    };
  } else if (IMC >= 18.5 && IMC < 25) {
    return {
      description: 'Peso normal',
      color: colors.green[400],
      progress: 0.5,
    };
  } else if (IMC >= 25 && IMC < 30) {
    return {
      description: 'Pré-obesidade',
      color: colors.orange[500],
      progress: 0.75,
    };
  } else if (IMC >= 30 && IMC < 35) {
    return {
      description: 'Obesidade Grau 1',
      color: colors.orange[500],
      progress: 0.75,
    };
  } else if (IMC >= 35 && IMC < 40) {
    return {
      description: 'Obesidade Grau 2',
      color: colors.orange[500],
      progress: 0.75,
    };
  } else if (IMC >= 40) {
    return {
      description: 'Obesidade grau 3',
      color: colors.red[600],
      progress: 1,
    };
  } else {
    return {
      description: 'Erro ao calcular',
      color: colors.red[600],
      progress: 0,
    };
  }
};

export const getReplaceCommaToDot = (value: string) => {
  return Number(value.replace(',', '.'));
};
