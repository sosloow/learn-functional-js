import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';

import lessons from './lessons';

export default combineReducers({routing, lessons});
