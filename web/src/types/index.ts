export type FormValue = {
  height: string;
  bodyWeight: string;
};

export type ResultIMCType = {
  date: Date;
  height: number;
  bodyWeight: number;
  IMC: string;
  situation: string;
};

export type IMCContextType = {
  resultIMC: ResultIMCType[];
  handleSetResultIMC: (resultIMC: ResultIMCType) => void;
};
