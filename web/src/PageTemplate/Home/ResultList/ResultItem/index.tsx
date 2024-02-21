import { memo } from 'react';
import { ResultIMCType } from '@/types';
import { getFormattedDate } from '@/utils/format';

export const ResultItem = memo(function ResultItem(result: ResultIMCType) {
  return (
    <tr className="p-4 grid grid-cols-5 place-items-center bg-white text-gray-800 border-b-[1px] odd:bg-gray-100">
      <td>{getFormattedDate(result.date)}</td>
      <td>{result.bodyWeight}</td>
      <td>{result.height}</td>
      <td>{result.IMC}</td>
      <td>{result.situation}</td>
    </tr>
  );
});
