/***
*  Reducers define the applicaitons state in response to changes in actions.
 *  Notes:
 *  - keep your state as normalized as possible
 *  - Keep every entity in an object stored with an ID as a key, and use IDs to reference it
 *    from other entities, or lists
 *  - In a more complex app, you’re going to want different entities to reference each other
*/

import Immutable from 'immutable'

/**
 * Reducer: update the state according to actions
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = Immutable.List(['Code More!']), action) => {
	switch(action.type) {
		case 'addTodo':
			return state.push(action.todo)
		case 'deleteTodo':
			return state.filter((todo, index) => index !== action.index)
		default:
			return state
	}
}

/**
 * changing push to unshift, the todo item will go to the top instead of the bottom
 */
