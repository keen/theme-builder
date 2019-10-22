# Theme Builder

## Install with NPM

```ssh
npm install keen-theme-builder --save
```

## Live Demo

https://keen.github.io/theme-builder/

## Usage

Use this component to create custom theme for your charts and generate JS/CSS files

## Example

```javascript

const options = {
  chart: { label: 'Line', value: 'line' }, // specifies which chart is rendered in mock-up section by default,
  // possible values are:
  // { value: 'default', label: 'Default' },
  // { value: 'bar', label: 'Bar' },
  // { value: 'line', label: 'Line' },
  // { value: 'spline', label: 'Spline' },
  // { value: 'step', label: 'Step' },
  // { value: 'area', label: 'Area' },
  // { value: 'pie', label: 'Pie' },
  // { value: 'donut', label: 'Donut' },
  // { value: 'gauge', label: 'Gauge' },
  // { value: 'funnel', label: 'Funnel' },
  // { value: 'funnel-3d', label: 'Funnel 3d' },
  chartPalette: { label: 'Dracula', value: 'dracula' }, // predefined color schemas, 
  // possible values
  // { label: 'Autocollector', value: 'autocollector' }
  // { label: 'Dracula', value: 'dracula' }
  // { label: 'Modern', value: 'modern' }
  // By default it's set to 'None'. Choose colors or chartPalette as chartPalette injects predifined color scheme into colors array.
  isDashboardBuilderActive: false, // defines which fields are hidden. For dashboard builder we hide tabs and chart types select. By default it's false
  colors: ['red', '#fff', 'rgb(0,0,0)'], // you can provide custom color pallette, valid CSS color properties are supported.
  'appearance.background': '#000', // string, valid CSS color properties are supported
  'appearance.border': '#000', // string, valid CSS color properties are supported
  'appearance.font.family': 'Acme', // general font, for getting current list of Google fonts please provide your Google Fonts API key in utils/consts.js
  'title.show': false, // by default it's false
  'title.text': '',
  'title.textAlign': 'left',
  'title.color': '#000', // string, valid CSS color properties are supported
  'title.font.family': 'Acme',
  'title.font.size': '16' // string, font size in pixels
    // possible values
    // [
    //   { label: "Auto", value: 'auto'},
    //   { label: "10", value: 10 },
    //   { label: "12", value: 12 },
    //   { label: "14", value: 14 },
    //   { label: "16", value: 16 },
    //   { label: "18", value: 18 },
    //   { label: "20", value: 20 },
    //   { label: "24", value: 24 },
    //   { label: "30", value: 30 },
    //   { label: "36", value: 36 },
    // ];
  'title.font.bold': false, // by default it's false
  'title.font.italic': false, // by default it's false
  'subtitle.show': false, // by default it's false
  'subtitle.text': '',
  'subtitle.textAlign': 'center', // possible values ['left', 'right', 'center']. By default it's 'left
  'subtitle.color': '#000', // string, valid CSS color properties are supported
  'subtitle.font.family': 'Acme',
  'subtitle.font.size': '16',
  'subtitle.font.bold': false, // by default it's false
  'subtitle.font.italic': false, // by default it's false
  'axis.vertical.title.show': false, // by default it's false
  'axis.vertical.title.text': '',
  'axis.vertical.title.textAlign': 'center', // possible values ['left', 'right', 'center']. By default it's 'left
  'axis.vertical.title.color': '#000', // string, valid CSS color properties are supported
  'axis.vertical.title.font.family': 'Acme',
  'axis.vertical.title.font.size': '16',
  'axis.vertical.title.font.bold': false, // by default it's false
  'axis.vertical.title.font.italic': false, // by default it's false
  'axis.vertical.label.show': false, // by default it's false
  'axis.vertical.label.color': '#000', // string, valid CSS color properties are supported
  'axis.vertical.label.font.family': 'Acme',
  'axis.vertical.label.font.size': '16',
  'axis.vertical.label.font.bold': false, // by default it's false
  'axis.vertical.label.font.italic': false, // by default it's false
  'axis.horizontal.title.show': false, // by default it's false
  'axis.horizontal.title.text': '',
  'axis.horizontal.title.textAlign': 'center', // possible values ['left', 'right', 'center']. By default it's 'left
  'axis.horizontal.title.color': '#000', // string, valid CSS color properties are supported
  'axis.horizontal.title.font.family': 'Acme',
  'axis.horizontal.title.font.size': '16',
  'axis.horizontal.title.font.bold': false, // by default it's false
  'axis.horizontal.title.font.italic': false, // by default it's false
  'axis.horizontal.label.show': false, // by default it's false
  'axis.horizontal.label.color': '#000', // string, valid CSS color properties are supported
  'axis.horizontal.label.font.family': 'Acme',
  'axis.horizontal.label.font.size': '16',
  'axis.horizontal.label.font.bold': false, // by default it's false
  'axis.horizontal.label.font.italic': false, // by default it's false
  'legend.show': false, // by default it's false
  'legend.color': '#000', // string, valid CSS color properties are supported
  'legend.font.family': 'Acme',
  'legend.font.size': '16',
  'legend.font.bold': false, // by default it's false
  'legend.font.italic': false, // by default it's false
  'legend.layout': 'left', // defines position of legend
  // possible values
  // { label: 'Top', value: 'top' },
  // { label: 'Right', value: 'right' },
  // { label: 'Bottom', value: 'bottom' },
  // { label: 'Left', value: 'left' }
  'legend.position.horizontal': '', // applies to the chart once legend.layout is set to `top` or `bottom`
  // possible values
  // { label: 'Left', value: 'left' },
  // { label: 'Center', value: 'center' },
  // { label: 'Right', value: 'right'}
  'legend.position.vertical': '', // applies to the chart once legend.layout is set to `left` or `right`
  // possible values
  // { label: 'Top', value: 'top' },
  // { label: 'Middle', value: 'middle' },
  // { label: 'Bottom', value: 'bottom' }
  'grid.show': false, // by default it's false
  'grid.lines.color': '#000', // string, valid CSS color properties are supported
  'grid.lines.count': '',
  // possible values
  // { label: 'Auto', value: '' },
  // { label: '1', value: 1 },
  // { label: '2', value: 2 },
  // { label: '3', value: 3 },
  // { label: '4', value: 4 },
  // { label: '5', value: 5 },
  // { label: '6', value: 6 },
  // { label: '7', value: 7 },
  // { label: '8', value: 8 },
  // { label: '9', value: 9 },
  // { label: '10', value: 10 },
  'subgrid.show': false, // by default it's false
  'subgrid.lines.color': '#000', // string, valid CSS color properties are supported
  'subgrid.lines.count': '',
}

const onChange = (data) => {
  console.log(data);
}

<Builder
  options={options}
  onChange={onChange} // defines function that gets current state as an input
/>

```
