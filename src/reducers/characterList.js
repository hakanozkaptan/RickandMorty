import { GET_DATA } from '../constants/actionTypes';

const defaultState = {
  page: 1,
  characters: [],
  characterCount: 0,
  pageCount: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        characters: [...state.characters, ...action.payload.results],
        characterCount: action.payload.results.length,
        pageCount: action.payload.info.pages,
        page: state.page + 1
      };
    default:
      return state;
  }
};
