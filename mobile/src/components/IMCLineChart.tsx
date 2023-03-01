import { memo, useEffect, useState } from 'react';
import { ResultIMCType } from '../types';
import { LineChart, XAxis } from 'react-native-svg-charts';
import { View } from 'react-native';
import { getFormattedDate } from '../utils/format';
import { Text } from './Text';
import { curveCardinal } from 'd3-shape';
import { INITIAL_LINE_CHART } from '../utils/constant';

type chartValueProps = {
  IMC: string;
  date: Date;
  color: string;
};

interface IMCLineChartProps {
  data: ResultIMCType[];
  textColor: string;
}

function IMCLineChart({ data = [], textColor }: IMCLineChartProps) {
  const [chartValue, setChartValue] =
    useState<chartValueProps[]>(INITIAL_LINE_CHART);

  useEffect(() => {
    if (data.length > 1) {
      const chartData = data.slice(0, 5).map((item: ResultIMCType) => ({
        IMC: item.IMC,
        date: item.date,
        color: item.situation.color,
      }));

      setChartValue(chartData.reverse());
    }
  }, [data]);

  const color = chartValue[chartValue.length - 1]?.color;

  return (
    <View
      className="w-full rounded-2xl my-2 px-4 py-1 bg-gray-200 dark:bg-gray-600 border-b-4"
      style={{ borderBottomColor: color, elevation: 1 }}
    >
      <Text className="ml-2 mt-2">Últimos 5 IMC</Text>
      <LineChart
        style={{ height: 96, paddingVertical: 0 }}
        data={chartValue}
        contentInset={{ top: 20, bottom: 20 }}
        svg={{
          strokeWidth: 2,
          stroke: color,
        }}
        yAccessor={({ item }) => Number(item.IMC)}
        curve={curveCardinal}
      />
      <XAxis
        data={chartValue}
        formatLabel={value => getFormattedDate(chartValue[value]?.date)}
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
