import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import List from '../../components/lessons/list';

import * as actions from '../../actions/lessons';

class LessonList extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.loadLessons();
  }

  render() {
    const {lessons} = this.props;

    return <List lessons={lessons} />;
  }
}

function mapStateToProps(state) {
  const {lessons: {lessons}} = state;

  return {lessons};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonList);
