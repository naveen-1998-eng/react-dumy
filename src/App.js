import React from 'react';
import List from './List';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: [
        {
          name: 'Testing........',
          age: 'Number......',
        },
      ],
    };
  }

  btnClick = () => {
    console.log('Button Clicked');
  };

  render() {
    return (
      <div>
        <List btnClick={this.btnClick} obj={this.state.obj} />
      </div>
    );
  }
}

export default App;
