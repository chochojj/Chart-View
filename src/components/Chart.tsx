import { useState } from 'react';
import styled from 'styled-components';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Area,
  Cell,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';

import CustomTooltip from './CustomTooltip';
import Data from '../assets/data/Data.json';
import useChartData from '../hooks/useChartData';
import { DataType } from '../types/type';

function App() {
  const { processedData } = useChartData(Data as DataType);
  const [district, setDistrict] = useState('전체');
  const districts = ['전체', '강남구', '노원구', '성북구', '중랑구'];
  return (
    <Container>
      <ButtonWrapper>
        {districts.map(el => (
          <button
            key={el}
            style={{ border: el === district ? '3px solid #8884d8' : 'transparent' }}
            onClick={() => setDistrict(el)}
          >
            {el}
          </button>
        ))}
      </ButtonWrapper>
      <ResponsiveContainer width="100%" height={800}>
        <ComposedChart
          data={processedData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis
            yAxisId="area"
            dataKey="value_area"
            domain={[0, 250]}
            label={{ value: 'Area', angle: -90, position: 'insideLeft' }}
          />
          <YAxis
            dataKey="value_bar"
            orientation="right"
            label={{ value: 'Bar', angle: 90, position: 'insideRight' }}
          />
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }} />
          <Legend />
          <Bar
            dataKey="value_bar"
            fill="MediumPurple"
            onClick={data => setDistrict(data.id)}
            barSize={20}
          >
            {processedData.map(data => (
              <Cell
                key={data.id}
                fill={data.id === district ? 'BlueViolet' : 'MediumPurple'}
                cursor="pointer"
              />
            ))}
          </Bar>
          <Area yAxisId="area" type="monotone" dataKey="value_area" fill="salmon" stroke="salmon" />
        </ComposedChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 25px 0px;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-evenly;

  button {
    border-radius: 25px;
    padding: 5px 10px;
  }
`;
