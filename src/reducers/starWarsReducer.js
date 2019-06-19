import * as types from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.FETCH): 
      return {...state, fetching: action.payload};
      case (types.SUCCESS):
        return {
          ...state, 
          characters: action.payload,
          fetching: false,
          error: null
        };
        case (types.FAILURE):
          return {
            ...state, 
            error: action.payload, 
            fetching: false
          }
    default:
      return state;
  }
};
