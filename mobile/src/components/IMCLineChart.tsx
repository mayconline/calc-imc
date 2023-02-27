import { memo, useEffect, useState } from 'react';
import { ResultIMCType } from '../types';
import { LineChart, XAxis } from 'react-native-svg-charts';
import { View } from 'react-native';
import { getFormattedDate } from '../utils/format';
import { Text } from './Text';
import { curveCardinal } from 'd3-shape';

type chartValueProps = {
  IMC: string;
  date: Date;
  color: string;
};

interface IMCLineChartProps {
  data: ResultIMCType[];
  textColor: string;
  lastResult: ResultIMCType;
}

function IMCLineChart({ data = [], textColor, lastResult }: IMCLineChartProps) {
  const [chartValue, setChartValue] = useState<chartValueProps[]>([]);

  useEffect(() => {
    const chartData = data.slice(0, 5).map((item: ResultIMCType) => ({
      IMC: item.IMC,
      date: item.date,
      color: item.situation.color,
    }));

    setChartValue(chartData.reverse());
  }, [data]);

  return (
    <View className="w-full">
      <Text className="ml-2 mt-2">Últimos 5 IMC</Text>
      <LineChart
        style={{ height: 180, paddingVertical: 24 }}
        data={chartValue}
        contentInset={{ top: 8, bottom: 8 }}
        svg={{
          strokeWidth: 2,
          stroke: lastResult?.situation?.color,
        }}
        yAccessor={({ item }) => Number(item.IMC)}
        curve={curveCardinal}
      />
      <XAxis
        data={chartValue}
        formatLabel={value => getFormattedDate(value.date)}
        style={{ marginBottom: 20 }}
        contentInset={{ left: 24, right: 24 }}
        svg={{
          fontSize: 16,
          fill: textColor,
        }}
      />
    </View>
  );
}

export const IMCLineChartMemo = memo(IMCLineChart);
