/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { results } from '../utils/consts';
import Chart from 'keen-react-charts';

const TabChart = ({
  type,
  colors = [],
  legend = {},
  axis = {},
  title,
  subtitle,
  data,
  point,
  prefix,
  suffix,
  choropleth,
  funnel,
  slider,
  simpleTooltip,
  sparkline,
  stacked,
  pagination,
  ...props
}) => {
  const chartSpecificLabels = type => {
    const getLabel = () =>
      data && data.labels
        ? { label: { show: true } }
        : { label: { show: false } };
    if (type === 'pie') return { pie: getLabel() };
    if (type === 'donut') return { donut: getLabel() };
    if (type === 'gauge') return { gauge: getLabel() };
  };
  let heatmapOptions;
  let tableOptions = {};
  if (type === 'heatmap') {
    heatmapOptions = {
      showSlider: slider,
      simpleTooltip
    };
  }
  if (type === 'table' && pagination) {
    tableOptions = {
      pagination: {
        limit: pagination
      }
    };
  }
  const renderDefaultCharts = () => {
    return (
      <div className="builder__default-charts">
        <Chart
          type="bar"
          title={title}
          subtitle={subtitle}
          colors={colors}
          legend={legend}
          axis={axis}
          data={data}
          point={point}
          sparkline={sparkline}
          stacked={stacked}
          results={results['bar']}
        />
        <Chart
          type="area"
          title={title}
          subtitle={subtitle}
          colors={colors}
          legend={legend}
          axis={axis}
          data={data}
          point={point}
          sparkline={sparkline}
          stacked={stacked}
          results={results['area']}
        />
        <Chart
          type="funnel-3d"
          title={title}
          subtitle={subtitle}
          colors={colors}
          legend={legend}
          data={data}
          point={point}
          funnel={funnel}
          results={results['funnel-3d']}
        />
        <Chart
          type="donut"
          title={title}
          subtitle={subtitle}
          colors={colors}
          legend={legend}
          data={data}
          point={point}
          sparkline={sparkline}
          results={results['donut']}
          {...chartSpecificLabels('donut')}
        />
      </div>
    );
  };

  const renderChart = () => {
    return (
      <Chart
        type={type}
        title={title}
        subtitle={subtitle}
        colors={colors}
        legend={legend}
        axis={axis}
        data={data}
        point={point}
        prefix={prefix}
        suffix={suffix}
        heatmap={heatmapOptions}
        choropleth={choropleth}
        funnel={funnel}
        sparkline={sparkline}
        stacked={stacked}
        table={tableOptions}
        results={
          type === 'choropleth' && choropleth.map === 'us'
            ? results['choropleth-us']
            : results[type]
        }
        {...chartSpecificLabels(type)}
      />
    );
  };

  return type === 'default' ? renderDefaultCharts() : renderChart();
};

export default TabChart;

TabChart.propTypes = {
  type: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired
};
