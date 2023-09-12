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

import Data from '../assets/data/Data.json';
import useChartData from '../hooks/useChartData';
import { DataType } from '../types/type';

function App() {
  const { processedData } = useChartData(Data as DataType);
  const [district, setDistrict] = useState('');
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
      <ResponsiveContainer width="100%" height={700}>
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
            orientation="left"
            dataKey="value_area"
            domain={[0, (max: number) => Math.max(max * 2, 200)]}
            label={{ value: 'Area', angle: -90, position: 'insideLeft' }}
          />
          <YAxis
            dataKey="value_bar"
            orientation="right"
            label={{ value: 'Bar', angle: 90, position: 'insideRight' }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value_bar"
            fill="#8884d8"
            onClick={data => setDistrict(data.id)}
            barSize={20}
          >
            {processedData.map(data => (
              <Cell
                key={data.id}
                fill={data.id === district ? '#5452c3' : '#8884d8'}
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
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-evenly;

  button {
    border-radius: 25px;
    padding: 5px 10px;
  }
`;
