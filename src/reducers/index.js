import { combineReducers } from 'redux';
import sort  from './sort';

// import tracks from './tracks';
import objectSort from './objectSort';
// import filterTracks from './filterTracks';

export default combineReducers({
  sort,
  objectSort,
//   filterTracks
});