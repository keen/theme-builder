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
  'appearance_background': '#000', // string, valid CSS color properties are supported
  'appearance_border': '#000', // string, valid CSS color properties are supported
  'appearance_font_family': 'Acme', // general font, for getting current list of Google fonts please provide your Google Fonts API key in utils/consts.js
  'title_show': false, // by default it's false
  'title_text': '',
  'title_textAlign': 'left',
  'title_color': '#000', // string, valid CSS color properties are supported
  'title_font_family': 'Acme',
  'title_font_size': '16' // string, font size in pixels
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
  'title_font_bold': false, // by default it's false
  'title_font_italic': false, // by default it's false
  'subtitle_show': false, // by default it's false
  'subtitle_text': '',
  'subtitle_textAlign': 'center', // possible values ['left', 'right', 'center']. By default it's 'left
  'subtitle_color': '#000', // string, valid CSS color properties are supported
  'subtitle_font_family': 'Acme',
  'subtitle_font_size': '16',
  'subtitle_font_bold': false, // by default it's false
  'subtitle_font_italic': false, // by default it's false
  'axis_vertical_title_show': false, // by default it's false
  'axis_vertical_title_text': '',
  'axis_vertical_title_textAlign': 'center', // possible values ['left', 'right', 'center']. By default it's 'left
  'axis_vertical_title_color': '#000', // string, valid CSS color properties are supported
  'axis_vertical_title_font_family': 'Acme',
  'axis_vertical_title_font_size': '16',
  'axis_vertical_title_font_bold': false, // by default it's false
  'axis_vertical_title_font_italic': false, // by default it's false
  'axis_vertical_label_show': false, // by default it's false
  'axis_vertical_label_color': '#000', // string, valid CSS color properties are supported
  'axis_vertical_label_font_family': 'Acme',
  'axis_vertical_label_font_size': '16',
  'axis_vertical_label_font_bold': false, // by default it's false
  'axis_vertical_label_font_italic': false, // by default it's false
  'axis_horizontal_title_show': false, // by default it's false
  'axis_horizontal_title_text': '',
  'axis_horizontal_title_textAlign': 'center', // possible values ['left', 'right', 'center']. By default it's 'left
  'axis_horizontal_title_color': '#000', // string, valid CSS color properties are supported
  'axis_horizontal_title_font_family': 'Acme',
  'axis_horizontal_title_font_size': '16',
  'axis_horizontal_title_font_bold': false, // by default it's false
  'axis_horizontal_title_font_italic': false, // by default it's false
  'axis_horizontal_label_show': false, // by default it's false
  'axis_horizontal_label_color': '#000', // string, valid CSS color properties are supported
  'axis_horizontal_label_font_family': 'Acme',
  'axis_horizontal_label_font_size': '16',
  'axis_horizontal_label_font_bold': false, // by default it's false
  'axis_horizontal_label_font_italic': false, // by default it's false
  'legend_show': false, // by default it's false
  'legend_color': '#000', // string, valid CSS color properties are supported
  'legend_font_family': 'Acme',
  'legend_font_size': '16',
  'legend_font_bold': false, // by default it's false
  'legend_font_italic': false, // by default it's false
  'legend_layout': 'left', // defines position of legend
  // possible values
  // { label: 'Top', value: 'top' },
  // { label: 'Right', value: 'right' },
  // { label: 'Bottom', value: 'bottom' },
  // { label: 'Left', value: 'left' }
  'legend_position_horizontal': '', // applies to the chart once legend_layout is set to `top` or `bottom`
  // possible values
  // { label: 'Left', value: 'left' },
  // { label: 'Center', value: 'center' },
  // { label: 'Right', value: 'right'}
  'legend_position_vertical': '', // applies to the chart once legend_layout is set to `left` or `right`
  // possible values
  // { label: 'Top', value: 'top' },
  // { label: 'Middle', value: 'middle' },
  // { label: 'Bottom', value: 'bottom' }
  'grid_show': false, // by default it's false
  'grid_lines_color': '#000', // string, valid CSS color properties are supported
  'grid_lines_count': '',
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
  'subgrid_show': false, // by default it's false
  'subgrid_lines_color': '#000', // string, valid CSS color properties are supported
  'subgrid_lines_count': '',
}

const onChange = (data) => {
  console.log(data);
}

<Builder
  options={options}
  onChange={onChange} // defines function that gets current state as an input
/>

```
