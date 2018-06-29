import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import character from './reducers/character';
import characters from './reducers/characterList';

export default combineReducers({
  character,
  characters,
  router: routerReducer
});
