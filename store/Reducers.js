// Exmaple File
import { TODO_COMMANDS, FILTER_COMMANDS } from './Actions.js';

/**
 * Непосредственно работает с состояние Store,
 * изменяет, расширяет, модифицирует и т.д.
 * @param {Store.state} state - предыдущее состояние в Store
 * @param {Object} action - тип события и данные
 */
export default function todoReducers(state = {}, action) {
	switch (action.type) {
		case TODO_COMMANDS.ADD:
			if (Array.isArray(action.payload)) {
				return {
					...state,
					todo: [  ...action.payload, ...state.todo, ],
				};
			} else {
				return {
					...state,
					todo: [  action.payload, ...state.todo, ],
				};
			}
		
		case TODO_COMMANDS.EDIT:
			let index = state.todo.indexOf(state.todo.find(item => item._id === action.payload._id));
			return {
				...state,
				todo: [ ...state.todo.slice(0, index), action.payload, ...state.todo.slice(index + 1)],
			};

		case TODO_COMMANDS.DELETE:
			return {
				...state,
				todo: [ ...state.todo.filter(item => item._id != action.payload._id) ],
			};

		case FILTER_COMMANDS.CHANGE:
			return {
				...state,
				selectedFilter: action.payload,
			}

		default:
			return state;
	}
}