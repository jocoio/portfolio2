import { TOGGLE_CURTAIN_VISIBILITY } from '../actions/types'

const initialState = {
  visibility: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_CURTAIN_VISIBILITY: 
      return {
        ...state,
        visibility: action.payload
      };
    default:
      return state;
  }
}