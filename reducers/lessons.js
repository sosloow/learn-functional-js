import {extend} from 'lodash';

export default function lessonsReducer(state={lessons: [], currentLesson: {}}, action) {
  switch (action.type) {
  case 'LESSONS_LOAD':
    return extend({}, state, {lessons: action.fields});
  case 'LESSONS_GET':
    return extend({}, state, {currentLesson: action.fields});
  default:
    return state;
  }
}
