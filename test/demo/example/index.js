import React from 'react';
import ReactDOM from 'react-dom';
import Builder from '../../../lib/Builder';

class App extends React.Component {
    constructor(props) {
      super(props);
    }

    onChange = (data) => {
      console.log(data);
    }

    render() {
      return (
        <Builder onChange={this.onChange}/>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('keen-theme-builder'));