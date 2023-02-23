import { memo } from 'react';
import { ResultIMCType } from '../types';
import { ProgressCircle } from 'react-native-svg-charts';
import {
  Text as TextSVG,
  Defs,
  LinearGradient,
  Stop,
  G,
  Line,
  Circle,
} from 'react-native-svg';
import { View } from 'react-native';

const Gradient = () => (
  <Defs key={'gradient'}>
    <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
      <Stop offset={'0%'} stopColor={'#60a5fa'} />
      <Stop offset={'20%'} stopColor={'#4ade80'} />
      <Stop offset={'60%'} stopColor={'#facc15'} />
      <Stop offset={'80%'} stopColor={'#f97316'} />
      <Stop offset={'90%'} stopColor={'#ef4444'} />
      <Stop offset={'100%'} stopColor={'#dc2626'} />
    </LinearGradient>
  </Defs>
);

const Marker = ({ color = 'grey', rotation = 20 }) => {
  return (
    <G x={0} y={-10}>
      <Line
        y1={0}
        y2={0}
        x1={0}
        x2={-90}
        rotation={rotation}
        stroke={color}
        strokeWidth={12}
        strokeDasharray={'8,8'}
      />
      <Circle cy={0} r={8} fill={color} stroke={color} strokeWidth={8} />
    </G>
  );
};

interface IMCChartProps {
  item: ResultIMCType;
  textColor: string;
}

function IMCProgressChart({ item, textColor }: IMCChartProps) {
  return (
    <View className="w-full flex-1">
      <ProgressCircle
        style={{ height: 256 }}
        progress={0}
        progressColor={item?.situation?.color}
        startAngle={-Math.PI / 2}
        endAngle={Math.PI / 2}
        strokeWidth={16}
        backgroundColor="url(#gradient)"
      >
        <Gradient />
        <Marker
          color={item?.situation?.color}
          rotation={item?.situation?.progress}
        />
        <G x={0} y={40}>
          <TextSVG
            fill={textColor}
            textAnchor={'middle'}
            alignmentBaseline={'text-top'}
            fontSize={36}
            fontWeight="bold"
          >
            {item.IMC}
          </TextSVG>

          <TextSVG
            fill={textColor}
            textAnchor={'middle'}
            alignmentBaseline={'text-bottom'}
            fontSize={24}
          >
            {item?.situation?.description}
          </TextSVG>
        </G>
      </ProgressCircle>
    </View>
  );
}

export const IMCProgressChartMemo = memo(IMCProgressChart);
