import { ADD_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions"

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites}
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.concat(action.payload)
            }
        default:
            return state
    }
}

export default reducer