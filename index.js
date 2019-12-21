import Store from './store/Store.js';
import { addTodo, deleteTodo, editTodo } from './store/Actions.js';

// EXAMPLE

// Подписываемся на изменение Store 
// и будем выызвать при каждом изменении console.log(state)
Store.subscribe('change', state => console.log(state));

// Создание новой todo в Store
Store.dispatch(addTodo({
	id: 1,
	text: 'Я новоя задачка',
	createDate: new Date(),
	completed: false,
}));

// После диспача события все слушатели этого события получат новое
// состояние (state) хранилища (Store) и выполнят свои callback