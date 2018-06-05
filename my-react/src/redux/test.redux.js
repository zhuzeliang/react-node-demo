import { createAction, handleActions } from 'redux-actions'
import { getUserInfo } from '../api/getData.js'

export const saveUserInfo = createAction('SAVEUSERINFO')
export const addNum = createAction('ADDNUM')


export const test = handleActions({
    [saveUserInfo]: (state, action) => {
        return {
            ...state,
            userInfo: action.payload,
        }
    },
    [addNum]: (state, action) => ({
        ...state,
        num: state.num + 1,
    })
}, {
    num: 1,
    userInfo:{
    	user:"zq",
    	_id:""
    }
});


export function getUserInfoAction() {
    return dispatch => {
        getUserInfo().then(res => {
            if (res.data.code === 0) {
                dispatch(saveUserInfo(res.data.data))
            }
        })
    }

}