import { initialState } from "../index";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_CHARACTERS': {
      return { ...state, loading: true };
    }
    case 'FETCH_ALL_CHARACTERS_SUCCESS': {
      return {
        ...state,
        loading: false,
        results: action.data.results,
        info: {
          count: action.data.count,
          limit: action.data.limit,
          offset: action.data.offset,
          total: action.data.total,
        }
      };
    }
    case 'FETCH_ERROR': {
      return { ...state, loading: false, errors: action.data };
    }
    default: {
      return state;
    }
  }
};

export { reducer as CharacterReducer };
