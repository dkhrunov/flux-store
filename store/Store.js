import SubscribersObserver from "./SubscribersObserver.js";
import todoReducers from "./Reducers.js";

export default class Store {

	_state;
	_reducers;

	/**
	 * Принимает редюсер, и не обязательно начальное состояние
	 * вторым аргументом
	 * @param {function} reducers - функция редюсер
	 * @param {Object} initialState - не обезятельный параметр
	 */
	constructor(reducers, initialState) {
		this._reducers = reducers;
		this._state = !!initialState ? initialState : {};
		this.subscribersObserver = new SubscribersObserver();
	}

	/**
	 * Возвращает копию состояния Store
	 * @returns {Object}
	 */
	get state() {
		return JSON.parse(JSON.stringify(this._state));
	}

	/**
	 * Возвращает редюсер
	 * @returns {Function}
	 */
	get reducers() {
		return this._reducers;
	}

	/**
	 * Производит работу со Store,
	 * и уведомдляет слушателей о своем изменении
	 * @param {Object} action - описание события имеет type и payload
	 */
	dispatch(action) {
		this._state = this.reducers(this._state, action);
		this.subscribersObserver.notify('change', this._state);
	}

	/**
	 * Оформяет подписку на событие
	 * @param {String} event - событие
	 * @param {Callback} callback - вызывается, когда происходит событие
	 */
	subscribe(event, callback) {
		this.subscribersObserver.subscribe(event, callback);
	}
}

export default new Store(todoReducers/*, { something: 'InitState' }*/);