import React from 'react';
import PropTypes from 'prop-types';
import { results } from '../utils/consts';
import Chart from 'keen-react-charts';

const TabChart = ({type, colors = [], legend = {}, axis = {}, title, subtitle, ...props}) => {
  const renderDefaultCharts = () => {
    return (
      <div className="builder__default-charts">
        <Chart
          type='bar'
          title={title}
          subtitle={subtitle}
          colors={colors}
          legend={legend}
          axis={axis}
          results={results['bar']}
        />
        <Chart
          type='area'
          title={title}
          subtitle={subtitle}
          colors={colors}
          legend={legend}
          axis={axis}
          results={results['area']}
        />
        <Chart
          type='funnel-3d'
          title={title}
          subtitle={subtitle}
          colors={colors}
          legend={legend}
          results={results['funnel-3d']}
        />
        <Chart
          type='donut'
          title={title}
          subtitle={subtitle}
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
        subtitle={subtitle}
        colors={colors}
        legend={legend}
        axis={axis}
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