import {
  CHARACTERS_PAGE_LOADED,
  CHARACTERS_PAGE_UNLOADED,
  CHARACTERS_EPISODE_LOADED,
  CHARACTERS_EPISODE_UNLOADED,
} from '../constants/actionTypes';

const defaultState = {
  character: {},
  episodes: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHARACTERS_PAGE_LOADED:
      return {
        ...state,
        character: action.payload[0]
      };
    case CHARACTERS_EPISODE_LOADED:
      return {
        ...state,
        episodes: [...state.episodes, ...action.payload]
      };
    case CHARACTERS_PAGE_UNLOADED:
      return {
        ...state,
        character: {}
      };
    case CHARACTERS_EPISODE_UNLOADED:
      return {
        ...state,
        episodes: []
      }
    default:
      return state;
  }
};
