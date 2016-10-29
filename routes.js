import {Route, IndexRoute} from 'react-router';
import App from './containers/app';
import LessonsList from './containers/lessons/list';
import LessonsShow from './containers/lessons/show';

export default (
  <Route path="/" component={App} getComponent={App.onGetComponen}>
    <IndexRoute component={LessonsList} />
    <Route path="lessons/:id" component={LessonsShow} />
  </Route>
);
