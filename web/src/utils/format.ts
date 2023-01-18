import dayjs from 'dayjs';

export const getFormattedDate = (date: Date) => {
  return dayjs(date).format('DD/MM/YY [às] HH:mm');
};

export const getFormattedIMC = (IMC: number) => {
  if (IMC < 18.5) {
    return 'Abaixo do peso';
  } else if (IMC >= 18.5 && IMC < 25) {
    return 'Peso normal';
  } else if (IMC >= 25 && IMC < 30) {
    return 'Pré-obesidade';
  } else if (IMC >= 30 && IMC < 35) {
    return 'Obesidade Grau 1';
  } else if (IMC >= 35 && IMC < 40) {
    return 'Obesidade Grau 2';
  } else if (IMC >= 40) {
    return 'Obesidade Grau 3';
  } else {
    return 'Erro ao calcular';
  }
};

export const getReplaceCommaToDot = (value: string) => {
  return Number(value.replace(',', '.'));
};
