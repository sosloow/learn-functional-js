import {Component} from 'react';
import {Link} from 'react-router';

export default class LessonList extends Component {
  render() {
    const {lessons} = this.props;

    return (
      <div>
        <h1>Упражнения</h1>
        <nav>
          <ul>
            {lessons.map(lesson => {
              return (
                <li key={lesson.number}>
                  <Link
                    to={`/lessons/${lesson.number}`}
                  >{lesson.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}
