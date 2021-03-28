import store from './store'
import * as actionTypes from './actionTypes'

const reducer = (state = store, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_THEME:
            const theme = state.theme
            if (theme === 'night') {
                return {
                    ...state,
                    theme: 'day'
                }
            } else {
                return {
                    ...state,
                    theme: 'night'
                }
            }
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items: state.items.concat(action.item)
            }
        default:
            return state
    }
}

export default reducer