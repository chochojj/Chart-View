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
