const reducer = (state = {}, action) => {
	switch(action.type){
		case "add":
			return {
				...state,
				productData: action.payload,
				loggedIn: true
			}
		case "remove":
			return {
				...state,
				user: {},
				loggedIn: false
			}
		default:
			return state
	}
}
export const addToCart = (data) => {
	return {
		type: "add",
		payload: data
	}
}
export default createStore(reducer);