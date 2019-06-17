# Theme Builder

## Install with NPM

```ssh
npm install theme-builder --save
```

## Live Demo

https://keen.github.io/theme-builder/

## Usage

Use this component to create custom theme for your charts and generate JS/CSS files

## Example

```javascript

Builder.propTypes = {
  picker: PropTypes.object, // you can provide default values for color pickers, by default all of them are set to black
  colors: PropTypes.array, // you can provide custom color pallette, valid CSS color properties are supported
  chartType: PropTypes.string, // specifies which chart is rendered in mock-up section by default, possible values ['default', 'bar', 'line', 'spline', 'step', 'area', 'pie', 'donut', 'gauge', 'funnel', 'funnel-3d']
  chartPalette: PropTypes.string, // predefined color schemas, possible values ['autocollector', 'dracula', 'modern']. By default it's set to 'None' 
  shouldRenderMockUp: PropTypes.bool, // defines if mockup section is rendered. By default it's true
};

const defaultColor = '#000000';
const initialPicker = {
  'title': defaultColor,
  'legend': defaultColor,
  'label': defaultColor,
  'chart': defaultColor,
  'axis': defaultColor,
  'tooltip': defaultColor,
  'grid': defaultColor
};

<Builder
  picker = initialPicker
  colors = ['red', '#fff', 'rgb(0,0,0)']
  chartType = 'funnel'
  chartPalette = 'modern'
  shouldRenderMockUp = false
/>

```
