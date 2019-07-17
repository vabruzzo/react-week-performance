import { combineReducers } from 'redux';

import pointlessBoolean from './pointlessBoolean';
import bookList from './bookList';

const state = combineReducers({
  pointlessBoolean,
  bookList,
});

export default state;
