/**
 * There is only 1 store because each reducer is immutable the store controls
 * the current and next state using the reducers to generate correctly.
 *
 * This will create the store, bringing together the actions (see action folder)
 * and the reducer(s) (see reducers folder).  It will also register and unregister the
 * listeners. Maintatins state including access to getState() and update state using
 * dispatch(action)
 */
import { createStore } from 'redux';
import todos from './reducers/todos'


export default createStore(todos);


