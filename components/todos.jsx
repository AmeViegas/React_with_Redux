/**
 * CONNECT allows us to choose what parts of our state we want to give to our React component
 */
import React from 'react'
import {connect} from 'react-redux'

import NewTodo from './NewTodo'
import {addTodo, deleteTodo} from '../actions'


const Todos = ({todos, dispatch}) => (
	<div>
		<h1>Todos</h1>
		<NewTodo onChange={e => {
			// on enter key, dispatch add to create object & reset txt field
			if (e.keyCode == 13) {
				dispatch(addTodo(e.target.value));
				e.target.value = ''
			}
		}}/>
		{todos.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
			dispatch(deleteTodo(index))
		}}>X</button></p>)}
	</div>
)

function mapStateToProps(todos) {
	return {
		todos
	}
}

export default connect(mapStateToProps)(Todos)