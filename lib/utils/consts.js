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
  metric: {"query":{"analysis_type":"count","event_collection":"purchases","filters":[],"group_by":null,"interval":null,"timeframe":{"start":"2014-01-01","end":"2015-01-01"},"timezone":3600},"result":255},
  bar: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"interval":"daily","timezone":7200},"result":[{"value":[{"product.name":"apps","result":53},{"product.name":"books","result":47},{"product.name":"games","result":24},{"product.name":"sounds","result":76}],"timeframe":{"start":"2019-03-20T00:00:00.000Z","end":"2019-03-21T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":32},{"product.name":"books","result":24},{"product.name":"games","result":56},{"product.name":"sounds","result":32}],"timeframe":{"start":"2019-03-21T00:00:00.000Z","end":"2019-03-22T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":27},{"product.name":"books","result":32},{"product.name":"games","result":18},{"product.name":"sounds","result":33}],"timeframe":{"start":"2019-03-22T00:00:00.000Z","end":"2019-03-23T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":68},{"product.name":"books","result":56},{"product.name":"games","result":65},{"product.name":"sounds","result":59}],"timeframe":{"start":"2019-03-23T00:00:00.000Z","end":"2019-03-24T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":38},{"product.name":"books","result":48},{"product.name":"games","result":50},{"product.name":"sounds","result":26}],"timeframe":{"start":"2019-03-24T00:00:00.000Z","end":"2019-03-25T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":34},{"product.name":"books","result":15},{"product.name":"games","result":18},{"product.name":"sounds","result":14}],"timeframe":{"start":"2019-03-25T00:00:00.000Z","end":"2019-03-26T00:00:00.000Z"}}]},
  line: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"interval":"daily","timezone":7200},"result":[{"value":[{"product.name":"apps","result":53},{"product.name":"books","result":47},{"product.name":"games","result":24},{"product.name":"sounds","result":76}],"timeframe":{"start":"2019-03-20T00:00:00.000Z","end":"2019-03-21T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":32},{"product.name":"books","result":24},{"product.name":"games","result":56},{"product.name":"sounds","result":32}],"timeframe":{"start":"2019-03-21T00:00:00.000Z","end":"2019-03-22T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":27},{"product.name":"books","result":32},{"product.name":"games","result":18},{"product.name":"sounds","result":33}],"timeframe":{"start":"2019-03-22T00:00:00.000Z","end":"2019-03-23T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":68},{"product.name":"books","result":56},{"product.name":"games","result":65},{"product.name":"sounds","result":59}],"timeframe":{"start":"2019-03-23T00:00:00.000Z","end":"2019-03-24T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":38},{"product.name":"books","result":48},{"product.name":"games","result":50},{"product.name":"sounds","result":26}],"timeframe":{"start":"2019-03-24T00:00:00.000Z","end":"2019-03-25T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":34},{"product.name":"books","result":15},{"product.name":"games","result":18},{"product.name":"sounds","result":14}],"timeframe":{"start":"2019-03-25T00:00:00.000Z","end":"2019-03-26T00:00:00.000Z"}}]},
  spline: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"interval":"daily","timezone":7200},"result":[{"value":[{"product.name":"apps","result":53},{"product.name":"books","result":47},{"product.name":"games","result":24},{"product.name":"sounds","result":76}],"timeframe":{"start":"2019-03-20T00:00:00.000Z","end":"2019-03-21T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":32},{"product.name":"books","result":24},{"product.name":"games","result":56},{"product.name":"sounds","result":32}],"timeframe":{"start":"2019-03-21T00:00:00.000Z","end":"2019-03-22T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":27},{"product.name":"books","result":32},{"product.name":"games","result":18},{"product.name":"sounds","result":33}],"timeframe":{"start":"2019-03-22T00:00:00.000Z","end":"2019-03-23T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":68},{"product.name":"books","result":56},{"product.name":"games","result":65},{"product.name":"sounds","result":59}],"timeframe":{"start":"2019-03-23T00:00:00.000Z","end":"2019-03-24T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":38},{"product.name":"books","result":48},{"product.name":"games","result":50},{"product.name":"sounds","result":26}],"timeframe":{"start":"2019-03-24T00:00:00.000Z","end":"2019-03-25T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":34},{"product.name":"books","result":15},{"product.name":"games","result":18},{"product.name":"sounds","result":14}],"timeframe":{"start":"2019-03-25T00:00:00.000Z","end":"2019-03-26T00:00:00.000Z"}}]},
  step: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"interval":"daily","timezone":7200},"result":[{"value":[{"product.name":"apps","result":53},{"product.name":"books","result":47},{"product.name":"games","result":24},{"product.name":"sounds","result":76}],"timeframe":{"start":"2019-03-20T00:00:00.000Z","end":"2019-03-21T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":32},{"product.name":"books","result":24},{"product.name":"games","result":56},{"product.name":"sounds","result":32}],"timeframe":{"start":"2019-03-21T00:00:00.000Z","end":"2019-03-22T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":27},{"product.name":"books","result":32},{"product.name":"games","result":18},{"product.name":"sounds","result":33}],"timeframe":{"start":"2019-03-22T00:00:00.000Z","end":"2019-03-23T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":68},{"product.name":"books","result":56},{"product.name":"games","result":65},{"product.name":"sounds","result":59}],"timeframe":{"start":"2019-03-23T00:00:00.000Z","end":"2019-03-24T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":38},{"product.name":"books","result":48},{"product.name":"games","result":50},{"product.name":"sounds","result":26}],"timeframe":{"start":"2019-03-24T00:00:00.000Z","end":"2019-03-25T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":34},{"product.name":"books","result":15},{"product.name":"games","result":18},{"product.name":"sounds","result":14}],"timeframe":{"start":"2019-03-25T00:00:00.000Z","end":"2019-03-26T00:00:00.000Z"}}]},
  area: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"interval":"daily","timezone":7200},"result":[{"value":[{"product.name":"apps","result":53},{"product.name":"books","result":47},{"product.name":"games","result":24},{"product.name":"sounds","result":76}],"timeframe":{"start":"2019-03-20T00:00:00.000Z","end":"2019-03-21T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":32},{"product.name":"books","result":24},{"product.name":"games","result":56},{"product.name":"sounds","result":32}],"timeframe":{"start":"2019-03-21T00:00:00.000Z","end":"2019-03-22T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":27},{"product.name":"books","result":32},{"product.name":"games","result":18},{"product.name":"sounds","result":33}],"timeframe":{"start":"2019-03-22T00:00:00.000Z","end":"2019-03-23T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":68},{"product.name":"books","result":56},{"product.name":"games","result":65},{"product.name":"sounds","result":59}],"timeframe":{"start":"2019-03-23T00:00:00.000Z","end":"2019-03-24T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":38},{"product.name":"books","result":48},{"product.name":"games","result":50},{"product.name":"sounds","result":26}],"timeframe":{"start":"2019-03-24T00:00:00.000Z","end":"2019-03-25T00:00:00.000Z"}},{"value":[{"product.name":"apps","result":34},{"product.name":"books","result":15},{"product.name":"games","result":18},{"product.name":"sounds","result":14}],"timeframe":{"start":"2019-03-25T00:00:00.000Z","end":"2019-03-26T00:00:00.000Z"}}]},
  pie: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"timezone":7200},"result":[{"product.name":"apps","result":252},{"product.name":"books","result":222},{"product.name":"games","result":231},{"product.name":"sounds","result":240}]},
  donut: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-20T00:00:00.000-00:00","end":"2019-03-26T00:00:00.000-00:00"},"group_by":["product.name"],"timezone":7200},"result":[{"product.name":"apps","result":252},{"product.name":"books","result":222},{"product.name":"games","result":231},{"product.name":"sounds","result":240}]},
  gauge: {"query":{"analysis_type":"count","event_collection":"mobile_purchases","timeframe":{"start":"2019-03-21T00:00:00.000-00:00","end":"2019-03-22T00:00:00.000-00:00"},"filters":[{"property_name":"product.name","operator":"eq","property_value":"games"}],"timezone":7200},"result":56},
  funnel: {"steps":[{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"pageviews","optional":false,"inverted":false},{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"signups","optional":false,"inverted":false},{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"purchases","optional":false,"inverted":false}],"result":[1128,317,89]},
  'funnel-3d': {"steps":[{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"pageviews","optional":false,"inverted":false},{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"banner_visibility","optional":false,"inverted":false},{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"banner_clicks","optional":false,"inverted":false},{"with_actors":false,"actor_property":"user.uuid","filters":[],"timeframe":{"start":"2019-03-13T00:00:00+00:00","end":"2019-08-14T00:00:00+00:00"},"timezone":null,"event_collection":"signups","optional":false,"inverted":false}],"result":[1128,848,581,317]},
  choropleth: {"query":{"analysis_type":"count","event_collection":"homepage_views","timeframe":{"start":"2019-04-13T00:00:00.000-00:00","end":"2019-04-14T00:00:00.000-00:00"},"group_by":["geo.country"],"timezone":3600},"result":[{"geo.country":"Afghanistan","result":49},{"geo.country":"Albania","result":61},{"geo.country":"Algeria","result":2},{"geo.country":"Andorra","result":1},{"geo.country":"Angola","result":15},{"geo.country":"Antarctica","result":23},{"geo.country":"Argentina","result":479},{"geo.country":"Armenia","result":73},{"geo.country":"Australia","result":339},{"geo.country":"Austria","result":10},{"geo.country":"Azerbaijan","result":71},{"geo.country":"Bahamas","result":59},{"geo.country":"Bangladesh","result":3},{"geo.country":"Belarus","result":9},{"geo.country":"Belgium","result":1},{"geo.country":"Bolivia","result":34},{"geo.country":"Botswana","result":7},{"geo.country":"Brazil","result":879},{"geo.country":"Bulgaria","result":3},{"geo.country":"Cambodia","result":52},{"geo.country":"Cameroon","result":3},{"geo.country":"Canada","result":192},{"geo.country":"Chile","result":37},{"geo.country":"China","result":587},{"geo.country":"Colombia","result":222},{"geo.country":"Congo","result":63},{"geo.country":"Croatia","result":4},{"geo.country":"Denmark","result":455},{"geo.country":"Ecuador","result":39},{"geo.country":"Egypt","result":133},{"geo.country":"England","result":297},{"geo.country":"Estonia","result":31},{"geo.country":"Finland","result":460},{"geo.country":"France","result":452},{"geo.country":"Gambia","result":7},{"geo.country":"Germany","result":155},{"geo.country":"Ghana","result":16},{"geo.country":"Greece","result":30},{"geo.country":"Guatemala","result":9},{"geo.country":"Honduras","result":9},{"geo.country":"Hungary","result":8},{"geo.country":"Iceland","result":18},{"geo.country":"India","result":478},{"geo.country":"Indonesia","result":17},{"geo.country":"Iran","result":40},{"geo.country":"Iraq","result":17},{"geo.country":"Ireland","result":46},{"geo.country":"Israel","result":28},{"geo.country":"Italy","result":25},{"geo.country":"Jamaica","result":21},{"geo.country":"Japan","result":97},{"geo.country":"Liechtenstein","result":22},{"geo.country":"Madagascar","result":9},{"geo.country":"Malta","result":1},{"geo.country":"Mexico","result":31},{"geo.country":"Moldova","result":39},{"geo.country":"Mongolia","result":54},{"geo.country":"Netherlands","result":28},{"geo.country":"New Zealand","result":16},{"geo.country":"Norway","result":22},{"geo.country":"Pakistan","result":45},{"geo.country":"Paraguay","result":59},{"geo.country":"Poland","result":667},{"geo.country":"Portugal","result":29},{"geo.country":"Romania","result":1},{"geo.country":"Russia","result":600},{"geo.country":"Samoa","result":62},{"geo.country":"Scotland","result":9},{"geo.country":"Senegal","result":15},{"geo.country":"Serbia","result":17},{"geo.country":"Singapore","result":9},{"geo.country":"Slovakia","result":27},{"geo.country":"Slovenia","result":1},{"geo.country":"Somalia","result":9},{"geo.country":"South Korea","result":61},{"geo.country":"Spain","result":60},{"geo.country":"Sweden","result":83},{"geo.country":"Switzerland","result":13},{"geo.country":"Thailand","result":9},{"geo.country":"Ukraine","result":13},{"geo.country":"United States","result":1299},{"geo.country":"Uruguay","result":12},{"geo.country":"Venezuela","result":63},{"geo.country":"Vietnam","result":30},{"geo.country":"Wales","result":91}]},
  table: {"query":{"analysis_type":"extraction","event_collection":"user_action","timeframe":{"start":"2014-02-02T00:00:00.000-00:00","end":"2014-02-12T00:00:00.000-00:00"},"property_names":["user.name","battery_level","keen.timestamp"],"timezone":3600},"result":[{"battery_level":0.18,"user":{"name":"Florence Clarke"},"keen":{"timestamp":"2014-02-07T20:29:30.915Z"}},{"battery_level":0.88,"user":{"name":"Nora Briggs"},"keen":{"timestamp":"2014-02-10T18:39:46.587Z"}},{"battery_level":0.67,"user":{"name":"Kyle Gonzales"},"keen":{"timestamp":"2014-02-10T10:49:19.067Z"}},{"battery_level":0.47,"user":{"name":"Mason Chapman"},"keen":{"timestamp":"2014-02-08T14:54:31.495Z"}},{"battery_level":0.73,"user":{"name":"Mollie Jordan"},"keen":{"timestamp":"2014-02-03T18:12:37.714Z"}},{"battery_level":0.78,"user":{"name":"Jane Moss"},"keen":{"timestamp":"2014-02-11T10:17:42.047Z"}},{"battery_level":0.83,"user":{"name":"Donald Boone"},"keen":{"timestamp":"2014-02-06T16:05:58.206Z"}},{"battery_level":0.25,"user":{"name":"Donald Boone"},"keen":{"timestamp":"2014-02-11T09:39:57.938Z"}},{"battery_level":0.78,"user":{"name":"Phoebe Mack"},"keen":{"timestamp":"2014-02-07T19:55:08.812Z"}},{"battery_level":0.3,"user":{"name":"Callie Hansen"},"keen":{"timestamp":"2014-02-09T18:28:00.925Z"}},{"battery_level":0.18,"user":{"name":"Steven McDonald"},"keen":{"timestamp":"2014-02-02T18:31:27.694Z"}},{"battery_level":0.35,"user":{"name":"Amanda Obrien"},"keen":{"timestamp":"2014-02-04T12:48:03.587Z"}},{"battery_level":0.5,"user":{"name":"Joe Chambers"},"keen":{"timestamp":"2014-02-06T12:24:13.906Z"}},{"battery_level":0.59,"user":{"name":"Fanny Bell"},"keen":{"timestamp":"2014-02-10T12:11:11.525Z"}},{"battery_level":0.58,"user":{"name":"Dominic Haynes"},"keen":{"timestamp":"2014-02-07T19:23:23.654Z"}},{"battery_level":0.28,"user":{"name":"Lucas Stone"},"keen":{"timestamp":"2014-02-07T18:49:22.586Z"}}]},
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
  { label: "48", value: 48 },
  { label: "60", value: 60 },
  { label: "72", value: 72 },
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

export const availableChartTypes = [
  { value: 'default', label: 'Default' },
  { value: 'metric', label: 'Metric' },
  { value: 'table', label: 'Table' },
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
  { value: 'choropleth', label: 'Choropleth' },
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
  row: '#F3F5F6',
  rowHover: '#E7E7EC',
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

export const stackedOptions = [
  { label: 'None', value: '' },
  { label: 'Normal', value: 'normal' },
  { label: 'Percent', value: 'percent' },
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
  table: true,
}

export const defaultState = {
  chart: availableChartTypes[0].value,
  chartPalette: availableChartPalette[0].value,
  colors: chartColorPalette[availableChartPalette[0].value].colors,
  'general.prefix': '',
  'general.suffix': '',
  'appearance.background': defaultColors.background,
  'appearance.border': defaultColors.border,
  'appearance.color': defaultColors.background,
  'appearance.font.family': defaultFont.value,
  'appearance.font.size': fontSizeOptions[0].value,
  'appearance.font.bold': false,
  'appearance.font.italic': false,
  'appearance.sparkline': false,
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
  'series.slider.show': false,
  'series.stacked': stackedOptions[0].value,
  'tooltip.color': defaultColors.title,
  'tooltip.font.family': defaultFont.value,
  'tooltip.font.size': fontSizeOptions[0].value,
  'tooltip.font.bold': false,
  'tooltip.font.italic': false,
  'tooltip.background': defaultColors.background,
  'tooltip.border': colorPickerDefaultOption,
  'tooltip.simpleTooltip': false,
  'table.pagination.show': false,
  'table.pagination.limit': '',
  'table.header.show': false,
  'table.header.textAlign': horizontalPositionOptions[0].value,
  'table.header.color': defaultColors.title,
  'table.header.font.family': defaultFont.value,
  'table.header.font.size': fontSizeOptions[0].value,
  'table.header.font.bold': false,
  'table.header.font.italic': false,
  'table.body.show': false,
  'table.body.textAlign': horizontalPositionOptions[0].value,
  'table.body.color': defaultColors.title,
  'table.body.font.family': defaultFont.value,
  'table.body.font.size': fontSizeOptions[0].value,
  'table.body.font.bold': false,
  'table.body.font.italic': false,
  'table.body.row.alternate.color': defaultColors.row,
  'table.body.row.hover.background': defaultColors.rowHover,
}
