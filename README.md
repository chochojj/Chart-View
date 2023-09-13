### 시계열 차트 보기

데이터를 차트로 시각화합니다

### 데모 영상

| 지역별 차트 보기 | 
| :--------------: |
| ![차트](https://github.com/chochojj/Chart-View/assets/104323906/ab8f6274-fbd9-4cf6-819a-46eb5abf0bf6) |  

|그래프 호버시 정보 제공 | 
| :---------------------: |
|  ![호버이벤트](https://github.com/chochojj/Chart-View/assets/104323906/eadd3fd8-0b3a-4c31-88b6-0eced2c203e6) |

|그래프 클릭시 지역 활성화 |
| :---------------------: |
|    ![클릭이벤트](https://github.com/chochojj/Chart-View/assets/104323906/c9830170-a2e8-4e98-911b-b2be0e59a1c5) |
  
### 폴더 구조

```
📦src
 ┣ 📂assets
 ┃ ┗ 📂data
 ┃ ┃ ┗ 📜Data.json
 ┣ 📂components
 ┃ ┣ 📜Chart.tsx
 ┃ ┗ 📜CustomTooltip.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useChartData.ts
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyles.ts
 ┣ 📂types
 ┃ ┗ 📜type.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

### 기능 설명

#### 데이터 시각화

rechart 라이브러리를 사용하여 데이터를 차트로 시각화 했습니다
차트에 사용되는 데이터의 가공은 커스텀 훅으로 분리하여 데이터 처리 방식을 추상화 했습니다

```
import { useState, useEffect } from 'react';
import { DataType, DataItem } from '../types/type';

function useChartData(data: DataType) {
  const [processedData, setProcessedData] = useState<DataItem[]>([]);

  useEffect(() => {
    const rawData = data.response;
    const processedData = Object.keys(rawData).map(key => ({
      ...rawData[key],
      name: key.split(' ')[1],
    }));

    setProcessedData(processedData);
  }, [data]);

  return { processedData };
}

export default useChartData;


```

#### 커스텀 툴팁

커스텀 툴팁을 활용하여 데이터 호버시 해당 값의 정보를 손쉽게 조회할 수 있게 커스텀 했습니다

```
import { TooltipProps } from 'recharts';
...

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

```
