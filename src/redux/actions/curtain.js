import {TOGGLE_CURTAIN_VISIBILITY} from './types'


export const toggleCurtainVisibility = (visible) => (dispatch, getState)  => {
  dispatch({
    type: TOGGLE_CURTAIN_VISIBILITY,
    payload: visible
  })
}