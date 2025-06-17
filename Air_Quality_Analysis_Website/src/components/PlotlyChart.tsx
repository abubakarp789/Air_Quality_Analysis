import React from 'react';
import Plot from 'react-plotly.js';

type Props = {
  data: any[];
  layout: any;
  config?: any;
};

export default function PlotlyChart({ data, layout, config }: Props) {
  return (
    <Plot data={data} layout={layout} config={config} style={{ width: '100%' }} />
  );
} 