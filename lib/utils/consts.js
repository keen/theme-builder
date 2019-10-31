import React from 'react';
import palettes from '../../node_modules/keen-dataviz/lib/palettes';
import BoldIcon from '../assets/icons/bold-solid.svg';
import ItalicIcon from '../assets/icons/italic-solid.svg';
import AlignLeftIcon from '../assets/icons/align-left-solid.svg';
import AlignRightIcon from '../assets/icons/align-right-solid.svg';
import AlignCenterIcon from '../assets/icons/align-center-solid.svg';
import AlignBottomIcon from '../assets/icons/vertical-align-bottom.svg';
import AlignMiddleIcon from '../assets/icons/vertical-align-middle.svg';
import AlignTopIcon from '../assets/icons/vertical-align-top.svg';

export const GOOGLE_FONTS_API_KEY = 'AIzaSyC529qus-Wu8LEftuMjSSBOt7mKu5lMm2E'; // please provide your API key
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

export const baseColor = '#222222';

export const defaultFont = {
  label: 'Default',
  value: ''
};

export const fontSizeOptions = [
  { label: "Auto", value: 'auto'},
  { label: "10", value: 10 },
  { label: "12", value: 12 },
  { label: "14", value: 14 },
  { label: "16", value: 16 },
  { label: "18", value: 18 },
  { label: "20", value: 20 },
  { label: "24", value: 24 },
  { label: "30", value: 30 },
  { label: "36", value: 36 },
];

export const fontStyleOptions = [
  {
    label: <BoldIcon width="0.75rem" />,
    value: 'bold'
  },
  {
    label: <ItalicIcon width="0.625rem" />,
    value: 'italic'
  }
];

export const textAlignOptions = [
  {
    label: <AlignLeftIcon width="0.75rem" />,
    value: 'left'
  },
  {
    label: <AlignCenterIcon width="0.75rem" />,
    value: 'center'
  },
  {
    label: <AlignRightIcon width="0.75rem" />,
    value: 'right'
  }
];
export const textAlignOptionsVertical = [
  {
    label: <AlignTopIcon width="0.85em"/>,
    value: 'top',
  },
  {
    label: <AlignMiddleIcon width="0.85em"/>,
    value: 'middle',
  },
  {
    label: <AlignBottomIcon width="0.85em"/>,
    value: 'bottom',
  },
];

export const pickerLabel = {
  title: 'Title',
  legend: 'Legend',
  label: 'Label',
  chart: 'Chart text',
  axis: 'Axis text',
  tooltip: 'Tooltip text',
  grid: 'Grid line',
  chartBackground: 'Chart background',
  chartBorder: 'Chart border',
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

const defaultPalette = { colors: [
  '#00bbde', '#fe6672', '#eeb058', '#8a8ad6', '#ff855c', '#00cfbb',
  '#5a9eed', '#73d483', '#c879bb', '#0099b6', '#d74d58', '#cb9141',
  '#6b6bb6', '#d86945', '#00aa99', '#4281c9', '#57b566', '#ac5c9e',
  '#27cceb', '#ff818b', '#f6bf71', '#9b9be1', '#ff9b79', '#26dfcd',
  '#73aff4', '#87e096', '#d88bcb',
]};
export const chartColorPalette = {
  default: defaultPalette,
  ...palettes
};

export const availableChartPalette = [
  { value: 'default', label: 'Default' }
];

Object.keys(palettes).forEach(key => {
  const obj = {
    value: key,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }
  availableChartPalette.push(obj);
});

export const defaultColors = {
  title: '#222222',
  subtitle: '#6f6f6f',
  border: '#e8e8e8',
  background: '#ffffff',
};

export const layoutOptions = [
  { label: 'Top', value: 'top' },
  { label: 'Right', value: 'right' },
  { label: 'Bottom', value: 'bottom' },
  { label: 'Left', value: 'left' }
];

export const verticalPositionOptions = [
  { label: 'Top', value: 'top' },
  { label: 'Middle', value: 'middle' },
  { label: 'Bottom', value: 'bottom' }
];

export const horizontalPositionOptions = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right'}
];

export const gridLinesCountOptions = [
  { label: 'Auto', value: '' },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 },
];

export const lineThicknessOptions = [
  { label: '1px', value: 1 },
  { label: '2px', value: 2 },
  { label: '4px', value: 4 },
  { label: '8px', value: 8 },
];

export const pointsSizeOptions = [
  { label: 'Auto', value: 2.5 },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 },
];

export const axisLabelHeight = 60;
export const colorPickerDefaultOption = 'transparent';

export const accordionSection = {
  appearance: true,
  title: true,
  axis: true,
  legend: true,
  gridline: true,
  series: true,
  tooltip: true,
}

export const defaultState = {
  chart: availableChartTypes[0].value,
  chartPalette: availableChartPalette[0].value,
  colors: chartColorPalette[availableChartPalette[0].value].colors,
  'appearance.background': defaultColors.background,
  'appearance.border': defaultColors.border,
  'appearance.font.family': defaultFont.value,
  'title.show': false,
  'title.text': '',
  'title.textAlign': horizontalPositionOptions[0].value,
  'title.color': defaultColors.title,
  'title.font.family': defaultFont.value,
  'title.font.size': fontSizeOptions[0].value,
  'title.font.bold': false,
  'title.font.italic': false,
  'subtitle.show': false,
  'subtitle.text': '',
  'subtitle.textAlign': horizontalPositionOptions[0].value,
  'subtitle.color': defaultColors.subtitle,
  'subtitle.font.family': defaultFont.value,
  'subtitle.font.size': fontSizeOptions[0].value,
  'subtitle.font.bold': false,
  'subtitle.font.italic': false,
  'axis.vertical.title.show': false,
  'axis.vertical.title.text': '',
  'axis.vertical.title.textAlign': verticalPositionOptions[1].value,
  'axis.vertical.title.color': defaultColors.title,
  'axis.vertical.title.font.family': defaultFont.value,
  'axis.vertical.title.font.size': fontSizeOptions[0].value,
  'axis.vertical.title.font.bold': false,
  'axis.vertical.title.font.italic': false,
  'axis.vertical.label.show': false,
  'axis.vertical.label.color': defaultColors.title,
  'axis.vertical.label.font.family': defaultFont.value,
  'axis.vertical.label.font.size': fontSizeOptions[0].value,
  'axis.vertical.label.font.bold': false,
  'axis.vertical.label.font.italic': false,
  'axis.horizontal.title.show': false,
  'axis.horizontal.title.text': '',
  'axis.horizontal.title.textAlign': horizontalPositionOptions[0].value,
  'axis.horizontal.title.color': defaultColors.title,
  'axis.horizontal.title.font.family': defaultFont.value,
  'axis.horizontal.title.font.size': fontSizeOptions[0].value,
  'axis.horizontal.title.font.bold': false,
  'axis.horizontal.title.font.italic': false,
  'axis.horizontal.label.show': false,
  'axis.horizontal.label.color': defaultColors.title,
  'axis.horizontal.label.font.family': defaultFont.value,
  'axis.horizontal.label.font.size': fontSizeOptions[0].value,
  'axis.horizontal.label.font.bold': false,
  'axis.horizontal.label.font.italic': false,
  'legend.show': false,
  'legend.color': defaultColors.title,
  'legend.font.family': defaultFont.value,
  'legend.font.size': fontSizeOptions[0].value,
  'legend.font.bold': false,
  'legend.font.italic': false,
  'legend.layout': layoutOptions[0].value,
  'legend.position.horizontal': horizontalPositionOptions[0].value,
  'legend.position.vertical': verticalPositionOptions[0].value,
  'grid.show': false,
  'grid.lines.color': defaultColors.border,
  'grid.lines.count': gridLinesCountOptions[0].value,
  'subgrid.show': false,
  'subgrid.lines.color': defaultColors.border,
  'subgrid.lines.count': gridLinesCountOptions[0].value,
  'series.label.show': false,
  'series.label.textAlign': horizontalPositionOptions[0].value,
  'series.label.color': defaultColors.title,
  'series.label.font.family': defaultFont.value,
  'series.label.font.size': fontSizeOptions[0].value,
  'series.label.font.bold': false,
  'series.label.font.italic': false,
  'series.label.textAlign': horizontalPositionOptions[1].value,
  'series.line': lineThicknessOptions[0].value,
  'series.points.show': false,
  'series.points.size': pointsSizeOptions[0].value,
  'tooltip.color': defaultColors.title,
  'tooltip.font.family': defaultFont.value,
  'tooltip.font.size': fontSizeOptions[0].value,
  'tooltip.font.bold': false,
  'tooltip.font.italic': false,
  'tooltip.background': defaultColors.background,
  'tooltip.border': colorPickerDefaultOption,
}
