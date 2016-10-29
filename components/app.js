import {Component} from 'react';

const style = {
  width: '600px',
  paddingTop: '20px',
  paddingLeft: '50px'
};

export default class App extends Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}
