import {Component} from 'react';
import {Link} from 'react-router';

export default class LessonShow extends Component {
  render() {
    const {currentLesson} = this.props;

    return (
      <div>
        <h1>{currentLesson.name}</h1>
        <nav>
          <Link to="/">Назад</Link>
        </nav>
        <div>{currentLesson.description}</div>
      </div>
    );
  }
}
