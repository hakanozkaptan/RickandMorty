import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import character from './reducers/character';
import characterList from './reducers/characterList';

export default combineReducers({
  character,
  characterList,
  router: routerReducer
});
