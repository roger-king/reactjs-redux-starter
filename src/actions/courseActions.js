import {courseTypes as type} from './actionTypes';
import courseAPI from '../api/mockCourseApi';

export function createCourse(course){
  return{ type: type.CREATE_COURSE, course};
}


export function loadCoursesSuccess (courses){
  return { type: type.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
  return function(dispatch){
    return courseAPI.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
        throw(error);
    });
  };
}
