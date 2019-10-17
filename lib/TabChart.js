import React from 'react';
import PropTypes from 'prop-types';
import { results } from './config';
import Chart from 'keen-react-charts';

const TabChart = ({type, colors = [], legend = {}, title, ...props}) => {
  const renderDefaultCharts = () => {
    return (
      <div className="builder__default-charts">
        <Chart
          type='bar'
          title={title}
          colors={colors}
          legend={legend}
          results={results['bar']}
        />
        <Chart
          type='area'
          title={title}
          colors={colors}
          legend={legend}
          results={results['area']}
        />
        <Chart
          type='funnel-3d'
          title={title}
          colors={colors}
          legend={legend}
          results={results['funnel-3d']}
        />
        <Chart
          type='donut'
          title={title}
          colors={colors}
          legend={legend}
          results={results['donut']}
        />
      </div>
    );
  }

  const renderChart = () => {
    return (
      <Chart
        type={type}
        title={title}
        colors={colors}
        legend={legend}
        results={results[type]}
      />
    );
  }

  return type === 'default' ? renderDefaultCharts() : renderChart();
};

export default TabChart;

TabChart.propTypes = {
  type: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired
}