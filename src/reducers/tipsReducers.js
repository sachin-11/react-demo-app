import {
 TIPS_LIST_FAIL,
 TIPS_LIST_REQUEST,
 TIPS_LIST_SUCCESS
} from '../constants/tipsConstants'

export const tipsReducer = (state = { tips: [] }, action) => {
    switch (action.type) {
      case TIPS_LIST_REQUEST:
        return { loading: true }
      case TIPS_LIST_SUCCESS:
        return { loading: false, tips: action.payload }
      case TIPS_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }