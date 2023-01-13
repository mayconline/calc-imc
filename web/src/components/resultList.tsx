import { useIMC } from '../hooks/useIMC';
import { ResultItem } from './resultItem';

export function ResultList() {
  const { resultIMC } = useIMC();

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full ">
      <h2 className="font-bold text-xl">Resultado</h2>
      <div className="w-full overflow-x-auto border-solid border-2 rounded-sm border-cyan-200">
        <table className=" w-full min-w-max">
          <thead>
            <tr className="p-4 grid grid-cols-5 bg-white text-gray-800 border-b-2 border-b-gray-200">
              <th>Data</th>
              <th>Peso</th>
              <th>Altura</th>
              <th>IMC</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {resultIMC.map((result) => (
              <ResultItem key={String(result.date)} {...result} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
