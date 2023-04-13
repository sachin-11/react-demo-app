import axios from 'axios'
import {
 TIPS_LIST_FAIL,
 TIPS_LIST_REQUEST,
 TIPS_LIST_SUCCESS,
 TIPS_CREATE_FAIL,
 TIPS_CREATE_REQUEST,
//  TIPS_CREATE_RESET,
 TIPS_CREATE_SUCCESS
} from '../constants/tipsConstants'

const BaseURL = 'https://z4vl6wzvfc.execute-api.ap-south-1.amazonaws.com/dev'

export const listTips = () => async (dispatch ) => {
    try {
      dispatch({
        type: TIPS_LIST_REQUEST,
      })
  
    //   const {
    //     userLogin: { userInfo },
    //   } = getState()
  
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${userInfo.token}`,
    //     },
    //   }
  
      const { data } = await axios.get(`${BaseURL}/api/v1/tips`)
  
      dispatch({
        type: TIPS_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: TIPS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const createProduct = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: TIPS_CREATE_REQUEST,
      })

  
    //   const {
    //     userLogin: { userInfo },
    //   } = getState()
  
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${userInfo.token}`,
    //     },
    //   }
  
      const { data } = await axios.post(`${BaseURL}/api/v1/tips`, )
  
      dispatch({
        type: TIPS_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: TIPS_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }