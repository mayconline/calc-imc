import dayjs from 'dayjs';

export const getFormattedDate = (date: Date) => {
  return dayjs(date).format('DD/MM/YY [às] HH:mm');
};

export const getFormattedIMC = (IMC: number) => {
  if (IMC < 23) {
    return 'Peso abaixo da normalidade';
  } else if (IMC >= 23 && IMC <= 31) {
    return 'Peso normal';
  } else if (IMC > 31 && IMC <= 35) {
    return 'Peso acima da normalidade';
  } else {
    return 'Obesidade';
  }
};
