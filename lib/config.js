import {
  stripIndent
} from 'common-tags';
import palettes from '../node_modules/keen-dataviz/lib/palettes';

export const GOOGLE_FONT_API_KEY = 'YOUR_KEY';
export const GOOGLE_FONTS_URL ='https://www.googleapis.com/webfonts/v1/webfonts';

export const results = {
  bar: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"interval":"daily","timezone":7200},"result":[{"value":[{"product.name":"apps","result":53},{"product.name":"books","result":47},{"product.name":"games","result":24},{"product.name":"sounds","result":76}],"timeframe":{"start":"2019-03-20T00:00:00.000Z","end":"2019-03-21T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":32},{"product.name":"books","result":24},{"product.name":"games","result":56},{"product.name":"sounds","result":32}],"timeframe":{"start":"2019-03-21T00:00:00.000Z","end":"2019-03-22T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":27},{"product.name":"books","result":32},{"product.name":"games","result":18},{"product.name":"sounds","result":33}],"timeframe":{"start":"2019-03-22T00:00:00.000Z","end":"2019-03-23T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":68},{"product.name":"books","result":56},{"product.name":"games","result":65},{"product.name":"sounds","result":59}],"timeframe":{"start":"2019-03-23T00:00:00.000Z","end":"2019-03-24T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":38},{"product.name":"books","result":48},{"product.name":"games","result":50},{"product.name":"sounds","result":26}],"timeframe":{"start":"2019-03-24T00:00:00.000Z","end":"2019-03-25T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":34},{"product.name":"books","result":15},{"product.name":"games","result":18},{"product.name":"sounds","result":14}],"timeframe":{"start":"2019-03-25T00:00:00.000Z","end":"2019-03-26T00:00:00.000Z"}}]},
  line: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"interval":"daily","timezone":7200},"result":[{"value":[{"product.name":"apps","result":53},{"product.name":"books","result":47},{"product.name":"games","result":24},{"product.name":"sounds","result":76}],"timeframe":{"start":"2019-03-20T00:00:00.000Z","end":"2019-03-21T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":32},{"product.name":"books","result":24},{"product.name":"games","result":56},{"product.name":"sounds","result":32}],"timeframe":{"start":"2019-03-21T00:00:00.000Z","end":"2019-03-22T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":27},{"product.name":"books","result":32},{"product.name":"games","result":18},{"product.name":"sounds","result":33}],"timeframe":{"start":"2019-03-22T00:00:00.000Z","end":"2019-03-23T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":68},{"product.name":"books","result":56},{"product.name":"games","result":65},{"product.name":"sounds","result":59}],"timeframe":{"start":"2019-03-23T00:00:00.000Z","end":"2019-03-24T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":38},{"product.name":"books","result":48},{"product.name":"games","result":50},{"product.name":"sounds","result":26}],"timeframe":{"start":"2019-03-24T00:00:00.000Z","end":"2019-03-25T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":34},{"product.name":"books","result":15},{"product.name":"games","result":18},{"product.name":"sounds","result":14}],"timeframe":{"start":"2019-03-25T00:00:00.000Z","end":"2019-03-26T00:00:00.000Z"}}]},
  spline: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"interval":"daily","timezone":7200},"result":[{"value":[{"product.name":"apps","result":53},{"product.name":"books","result":47},{"product.name":"games","result":24},{"product.name":"sounds","result":76}],"timeframe":{"start":"2019-03-20T00:00:00.000Z","end":"2019-03-21T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":32},{"product.name":"books","result":24},{"product.name":"games","result":56},{"product.name":"sounds","result":32}],"timeframe":{"start":"2019-03-21T00:00:00.000Z","end":"2019-03-22T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":27},{"product.name":"books","result":32},{"product.name":"games","result":18},{"product.name":"sounds","result":33}],"timeframe":{"start":"2019-03-22T00:00:00.000Z","end":"2019-03-23T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":68},{"product.name":"books","result":56},{"product.name":"games","result":65},{"product.name":"sounds","result":59}],"timeframe":{"start":"2019-03-23T00:00:00.000Z","end":"2019-03-24T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":38},{"product.name":"books","result":48},{"product.name":"games","result":50},{"product.name":"sounds","result":26}],"timeframe":{"start":"2019-03-24T00:00:00.000Z","end":"2019-03-25T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":34},{"product.name":"books","result":15},{"product.name":"games","result":18},{"product.name":"sounds","result":14}],"timeframe":{"start":"2019-03-25T00:00:00.000Z","end":"2019-03-26T00:00:00.000Z"}}]},
  step: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"interval":"daily","timezone":7200},"result":[{"value":[{"product.name":"apps","result":53},{"product.name":"books","result":47},{"product.name":"games","result":24},{"product.name":"sounds","result":76}],"timeframe":{"start":"2019-03-20T00:00:00.000Z","end":"2019-03-21T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":32},{"product.name":"books","result":24},{"product.name":"games","result":56},{"product.name":"sounds","result":32}],"timeframe":{"start":"2019-03-21T00:00:00.000Z","end":"2019-03-22T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":27},{"product.name":"books","result":32},{"product.name":"games","result":18},{"product.name":"sounds","result":33}],"timeframe":{"start":"2019-03-22T00:00:00.000Z","end":"2019-03-23T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":68},{"product.name":"books","result":56},{"product.name":"games","result":65},{"product.name":"sounds","result":59}],"timeframe":{"start":"2019-03-23T00:00:00.000Z","end":"2019-03-24T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":38},{"product.name":"books","result":48},{"product.name":"games","result":50},{"product.name":"sounds","result":26}],"timeframe":{"start":"2019-03-24T00:00:00.000Z","end":"2019-03-25T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":34},{"product.name":"books","result":15},{"product.name":"games","result":18},{"product.name":"sounds","result":14}],"timeframe":{"start":"2019-03-25T00:00:00.000Z","end":"2019-03-26T00:00:00.000Z"}}]},
  area: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"interval":"daily","timezone":7200},"result":[{"value":[{"product.name":"apps","result":53},{"product.name":"books","result":47},{"product.name":"games","result":24},{"product.name":"sounds","result":76}],"timeframe":{"start":"2019-03-20T00:00:00.000Z","end":"2019-03-21T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":32},{"product.name":"books","result":24},{"product.name":"games","result":56},{"product.name":"sounds","result":32}],"timeframe":{"start":"2019-03-21T00:00:00.000Z","end":"2019-03-22T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":27},{"product.name":"books","result":32},{"product.name":"games","result":18},{"product.name":"sounds","result":33}],"timeframe":{"start":"2019-03-22T00:00:00.000Z","end":"2019-03-23T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":68},{"product.name":"books","result":56},{"product.name":"games","result":65},{"product.name":"sounds","result":59}],"timeframe":{"start":"2019-03-23T00:00:00.000Z","end":"2019-03-24T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":38},{"product.name":"books","result":48},{"product.name":"games","result":50},{"product.name":"sounds","result":26}],"timeframe":{"start":"2019-03-24T00:00:00.000Z","end":"2019-03-25T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":34},{"product.name":"books","result":15},{"product.name":"games","result":18},{"product.name":"sounds","result":14}],"timeframe":{"start":"2019-03-25T00:00:00.000Z","end":"2019-03-26T00:00:00.000Z"}}]},
  pie: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"timezone":7200},"result":[{"product.name":"apps","result":252},{"product.name":"books","result":222},{"product.name":"games","result":231},{"product.name":"sounds","result":240}]},
  donut: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"timezone":7200},"result":[{"product.name":"apps","result":252},{"product.name":"books","result":222},{"product.name":"games","result":231},{"product.name":"sounds","result":240}]},
  gauge: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-21T00:00:00.000-00:00","end":"2019-03-22T00:00:00.000-00:00"},"filters":[{"property_name":"product.name","operator":"eq","property_value":"games"}],"timezone":7200},"result":56},
  funnel: {"steps":[{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"pageviews","optional":false,"inverted":false},{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"signups","optional":false,"inverted":false},{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"purchases","optional":false,"inverted":false}],"result":[1128,317,89]},
  'funnel-3d': {"steps":[{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"pageviews","optional":false,"inverted":false},{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"banner_visibility","optional":false,"inverted":false},{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"banner_clicks","optional":false,"inverted":false},{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"signups","optional":false,"inverted":false}],"result":[1128,848,581,317]}
}

export const defaultColor = '#000000';

export const pickerLabel = {
  title: 'Title',
  legend: 'Legend',
  label: 'Label',
  chart: 'Chart text',
  axis: 'Axis text',
  tooltip: 'Tooltip text',
  grid: 'Grid line',
}

export const availableChartTypes = [
  { value: 'default', label: 'Default' },
  { value: 'bar', label: 'Bar' },
  { value: 'line', label: 'Line' },
  { value: 'spline', label: 'Spline' },
  { value: 'step', label: 'Step' },
  { value: 'area', label: 'Area' },
  { value: 'pie', label: 'Pie' },
  { value: 'donut', label: 'Donut' },
  { value: 'gauge', label: 'Gauge' },
  { value: 'funnel', label: 'Funnel' },
  { value: 'funnel-3d', label: 'Funnel 3d' },
];

export const chartColorPalette = palettes;

export const availableChartPalette = [
  { value: '', label: 'Default' }
];

Object.keys(palettes).forEach(key => {
  const obj = {
    value: key,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }
  availableChartPalette.push(obj);
});

export const defaultOptions = {
  picker: {},
  colors: [],
  fonts: [],
  font: {
    family: '',
    bold: false,
    italic: false,
    textAlign: 'left',
  },
  chartType: availableChartTypes[0],
  chartPalette: availableChartPalette[0],
  isDashboardBuilderActive: false,
};

export function getStylesheet(color, font) {
  const { family, textAlign, bold, italic } = font;
  const boldStyle = bold ? 'font-weight: bold;' : 'font-weight: initial;';
  const italicStyle = italic ? 'font-style: italic;' : 'font-style: initial;';

  const fontRule = `
  /* Font */

  @import url("https://fonts.googleapis.com/css?family=${family.replace(' ', '+')}&display=swap");
  
  .keen-dataviz,
  .c3 svg {
    font-family: "${family}";
  }
  `;
  return stripIndent`
  ${family && fontRule}

  .keen-dataviz {
    text-align: ${textAlign};
    ${boldStyle}
    ${italicStyle}
  }

  /* Title */

  .keen-dataviz .keen-dataviz-title {
    color: ${(color && color[pickerLabel.title]) || defaultColor};
  }

  /* Legend */

  .keen-dataviz .keen-c3-legend .legend-item-text {
    color: ${(color && color[pickerLabel.legend]) || defaultColor};
  }

  /* Label */

  .keen-dataviz .text-label {
    color: ${(color && color[pickerLabel.label]) || defaultColor};
  }

  /* Chart text */

  .keen-dataviz .text-main,
  .keen-dataviz .text-second,
  .keen-dataviz .c3-chart-arcs .c3-chart-arcs-gauge-max,
  .keen-dataviz .c3-chart-arcs .c3-chart-arcs-gauge-min,
  .keen-dataviz .c3-chart-arc .c3-gauge-value,
  .keen-dataviz .c3-chart-arc text {
    fill: ${(color && color[pickerLabel.chart]) || defaultColor};
  }

  /* Axis text */

  .keen-dataviz .c3-axis text,
  .keen-dataviz .c3-chart .tick text {
    fill: ${(color && color[pickerLabel.axis]) || defaultColor};
  }

  /* Tooltip text */

  .keen-dataviz .c3-tooltip,
  .keen-dataviz .c3-tooltip-container th {
    color: ${(color && color[pickerLabel.tooltip]) || defaultColor};
  }

  /* Grid line */

  .keen-dataviz .c3-grid line {
    stroke: ${(color && color[pickerLabel.grid]) || defaultColor};
  }
  `;
}

export function getScript(colors) {
  return stripIndent`
  const chart = new KeenDataviz({
    container: '#some_container', // required
    colors: ${JSON.stringify(colors)}
  });
  `;
}
