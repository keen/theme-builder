import React from 'react';
import ReactDOM from 'react-dom';
import Builder from '../../../lib/Builder';

class App extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Builder />
      );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));