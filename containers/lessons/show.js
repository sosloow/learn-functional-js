import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Show from '../../components/lessons/show';

import * as actions from '../../actions/lessons';

class LessonList extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getLesson(+this.props.params.id);
  }

  render() {
    return <Show {...this.props} />;
  }
}

function mapStateToProps(state) {
  const {lessons: {currentLesson}} = state;

  return {currentLesson};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonList);
