import lessons from '../lessons';

export function loadLessons() {
  return {
    type: 'LESSONS_LOAD',
    fields: lessons
  };
}

export function getLesson(id) {
  return {
    type: 'LESSONS_GET',
    fields: lessons.find(({number}) => number === id)
  };
}
