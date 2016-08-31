/**
 * Actions
 *
 * @param todo
 * @returns {{type: string, todo: *}}
 */
export function addTodo(todo){
	return {
		type: 'addTodo',
		todo
	}
}

/**
 *
 * @param index
 * @returns {{type: string, index: *}}
 */
export function deleteTodo(index){
	return {
		type: 'deleteTodo',
		index
	}
}
