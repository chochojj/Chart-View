import { TooltipProps } from 'recharts';
import styled from 'styled-components';

function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    const [bar, area] = payload;
    return (
      <Container>
        <District>{`📍 ${bar.payload.id}`}</District>
        <Value>
          <p>
            {`${bar.dataKey} : `}
            <span>{`${bar.value}`}</span>
          </p>
          <p>
            {`${area.dataKey} : `}
            <span>{`${area.value}`}</span>
          </p>
        </Value>
      </Container>
    );
  }

  return null;
}

export default CustomTooltip;

const Container = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
`;

const District = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
`;

const Value = styled.div`
  & > p {
    margin-bottom: 3px;
  }
`;
