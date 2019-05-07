import {
  stripIndent
} from 'common-tags'

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

export const chartColorPalette = {
  autocollector: [
    '#5E77FF',
    '#9C60FE',
    '#F162FE',
    '#FD65B7',
    '#FD6768',
    '#FDB86A',
    '#F2FC6C',
    '#A5FC6E',
    '#71FB85',
    '#73FBD0',
    '#76DDFA',
    '#76f4fa',
    '#bb76fa',
    '#fa76bf'
  ],
  dracula: [
    '#8be9fd',
    '#50fa7b',
    '#ffb86c',
    '#ff79c6',
    '#bd93f9',
    '#ff5555',
    '#f1fa8c',
  ],
  modern: [
    '#45B2E8',
    '#D9540D',
    '#2CAB72',
    '#2C4BAB',
    '#EDDD02',
    '#E84545',
    '#E845CE',
    '#5FCEC9',
    '#E89F45',
    '#28E43F',
    '#B765C0',
    '#458AE8',
    '#AB2C2C',
    '#AB2C75',
    '#27E5FF',
    '#7168F2',
    '#FF932B',
    '#855D00',
    '#ACE845',
    '#1C91B4'
  ]
}

export const defaultColor = '#000000';
export const initialPicker = {
  'title': defaultColor,
  'legend': defaultColor,
  'label': defaultColor,
  'chart': defaultColor,
  'axis': defaultColor,
  'tooltip': defaultColor,
  'grid': defaultColor
};

export const availableChartTypes = {
  default: 'Default',
  bar: 'Bar',
  line: 'Line',
  spline: 'Spline',
  step: 'Step',
  area: 'Area',
  pie: 'Pie',
  donut: 'Donut',
  gauge: 'Gauge',
  funnel: 'Funnel',
  'funnel-3d': 'Funnel 3d'
};

export const availableChartPalette = {
  none: 'None'
};

Object.keys(chartColorPalette).forEach(key => {
  availableChartPalette[key] = key;
});

export function getStylesheet(color) {
  const { title, legend, label, chart, axis, tooltip, grid } = color;
  return stripIndent`
  /* Title */

  .keen-dataviz .keen-dataviz-title {
    color: ${title};
  }

  /* Legend */

  .keen-dataviz .keen-c3-legend .legend-item-text {
    color: ${legend};
  }

  /* Label */

  .keen-dataviz .text-label {
    fill: ${label};
  }

  /* Chart text */

  .keen-dataviz .text-main,
  .keen-dataviz .text-second,
  .keen-dataviz .c3-chart-arcs .c3-chart-arcs-gauge-max,
  .keen-dataviz .c3-chart-arcs .c3-chart-arcs-gauge-min,
  .keen-dataviz .c3-chart-arc .c3-gauge-value,
  .keen-dataviz .c3-chart-arc text {
    fill: ${chart};
  }

  /* Axis text */

  .keen-dataviz .c3-axis text {
    fill: ${axis};
  }

  /* Tooltip text */

  .keen-dataviz .c3-tooltip,
  .keen-dataviz .c3-tooltip-container th {
    color: ${tooltip};
  }

  /* Grid line */

  .keen-dataviz .c3-grid line {
    stroke: ${grid};
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
