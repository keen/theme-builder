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
  picker: {'Title': 'red', 'Chart text': 'yellow'}, // you can provide default values for color pickers, by default all of them are set to black
  font: {
    family: 'Acme', // provide Google font family, for getting current list of Google fonts please provide your Google Fonts API key in utils/consts.js
    bold: false, // by default it's false
    italic: true, // by default it's false
    textAlign: 'center', // possible values ['left', 'right', 'center']. By default it's 'left
  },
  chartType: { label: 'Line', value: 'line' }, // specifies which chart is rendered in mock-up section by default,
  // possible values are 
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
  // { value: 'funnel-3d', label: 'Funnel 3d' }
  colors: ['red', '#fff', 'rgb(0,0,0)'], // you can provide custom color pallette, valid CSS color properties are supported.
  chartPalette: { label: 'Dracula', value: 'dracula' }, // predefined color schemas, 
  // possible values
  // { label: 'Autocollector', value: 'autocollector' }
  // { label: 'Dracula', value: 'dracula' }
  // { label: 'Modern', value: 'modern' }
  // By default it's set to 'None'. Choose colors or chartPalette as chartPalette injects predifined color scheme into colors array.
  isDashboardBuilderActive: false, // defines which fields are hidden. For dashboard builder we hide tabs and chart types select. By default it's false
}

const onChange = (data) => {
  console.log(data);
}

<Builder
  options={options}
  onChange={onChange} // defines function that gets current state as an input
/>

```
