export type FormValue = {
  height: string;
  bodyWeight: string;
};

export type ResultIMCType = {
  date: Date;
  height: number;
  bodyWeight: number;
  IMC: string;
  situation: {
    description: string;
    color: string;
    progress: number;
  };
};

export type IMCContextType = {
  resultIMC: ResultIMCType[];
  lastResultIMC: ResultIMCType;
  handleSetResultIMC: (resultIMC: ResultIMCType) => void;
};
