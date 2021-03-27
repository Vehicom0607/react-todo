import store from './store'
import * as actionTypes from './actionTypes'

const reducer = (state = store, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return state
        default:
            return state
    }
}

export default reducer