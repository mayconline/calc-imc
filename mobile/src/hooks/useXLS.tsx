import { useCallback, useEffect, useState } from 'react';
import XLSX from 'xlsx';
import { ResultIMCType } from '../types';
import { getFormattedDate } from '../utils/format';
import { handleShare } from '../utils/share';

interface useXLSProps {
  resultIMC: ResultIMCType[];
}

const dataType =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

export function useXLS({ resultIMC }: useXLSProps) {
  const [loading, setLoading] = useState(false);
  const [xlsFile, setXlsFile] = useState('');

  const handleGenerateXLS = useCallback((data: ResultIMCType[]) => {
    const formattedData = data.map((item: ResultIMCType) => ({
      ...item,
      situation: item.situation.description,
      date: getFormattedDate(item.date, true),
    }));

    try {
      const workSheet = XLSX.utils.json_to_sheet(formattedData);
      const workBook = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(workBook, workSheet, 'Meu IMC');
      const wbout = XLSX.write(workBook, {
        bookType: 'xlsx',
        type: 'base64',
      });

      setXlsFile(`data:${dataType};base64,${wbout}`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleGenerateXLS(resultIMC);
  }, [handleGenerateXLS, resultIMC]);

  const handleShareXLS = async () => {
    setLoading(true);
    try {
      await handleShare({
        title: 'Compartilhar planilha',
        url: xlsFile,
        type: dataType,
        filename: 'meu-imc',
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { xlsFile, handleShareXLS, loading };
}
