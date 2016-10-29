import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AppComponent from '../components/app';

import * as actions from '../actions';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <AppComponent {...this.props} />;
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
