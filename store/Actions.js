// Exmaple File

/**
 * Объект с коммандами
 */
export const TODO_COMMANDS = {
	ADD: 'ADD_TODO',
	EDIT: 'EDIT_TODO',
	DELETE: 'DELETE_TODO',
};

/**
 * Команда на добавление todo в Store
 * @param {Any} payload - данные которые внесутся в Store
 * @returns {Object} - вернеться объект с типом команды и новыми данными
 */
export function addTodo(payload) {
	return { type: TODO_COMMANDS.ADD, payload };
}

/**
 * Команда на редактирование todo в Store
 * @param {Any} payload - данные которые внесутся в Store
 * @returns {Object} - вернеться объект с типом команды и новыми данными
 */
export function editTodo(payload) {
	return { type: TODO_COMMANDS.EDIT, payload };
}

/**
 * Команда на удаление todo из Store
 * @param {Any} payload - данные которые внесутся в Store
 * @returns {Object}
 */
export function deleteTodo(payload) {
	return { type: TODO_COMMANDS.DELETE, payload };
}