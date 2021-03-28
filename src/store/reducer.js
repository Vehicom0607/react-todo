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
                items: [...state.items, action.item]
            }
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((_, i) => i !== action.index)
            }
        case actionTypes.COMPLETE_ITEM:
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if (index === action.index) {
                        return {...item, completed: !item.completed}
                    } else {
                        return item
                    }
                })
            }
        case actionTypes.CLEAR_COMPLETED:
            return {
                ...state,
                items: state.items.filter((item) => item.completed === false)
            }
        default:
            return state
    }
}

export default reducer