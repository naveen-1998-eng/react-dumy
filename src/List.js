import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {},
    };
  }

  componentDidMount() {
    let name = this.props.obj[0].name;
    let age = this.props.obj[0].age;
    this.setState({ obj: { name, age } });
  }

  saveClick = () => {
    this.props.btnClick && this.props.btnClick();
  };

  render() {
    return (
      <div>
        <label>Name : {this.state.obj.name} </label>
        <br />
        <label>Name : {this.state.obj.age} </label>
        <br />
        <button onClick={this.saveClick}> Button</button>
      </div>
    );
  }
}

export default List;
