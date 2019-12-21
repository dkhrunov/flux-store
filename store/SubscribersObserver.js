export default class SubscribersObserver {
	constructor() {
		this.subscribers = [];
	}
	/**
	 * Оформяет подписку на событие и
	 * сохраняет в массиве подписок 
	 * @param {String} event - событие
	 * @param {Callback} callback - вызывается, когда происходит событие
	 */
	subscribe(event, callback) {
		if (!this.subscribers[event]) {
			this.subscribers[event] = []
		}
		this.subscribers[event].push(callback);
	}

	/**
	 * Отписывается от события
	 * @param {String} event - событие
	 * @param {Callback} callback - вызывается, когда происходит событие
	 */
	unsubscribe(event, callback) {
		this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback)
	}

	/**
	 * Уведомляет всех подписчиков, 
	 * подписанных на событие event
	 * @param {String} event - событие
	 * @param {Any} payload - данные, которые получит функция подписки
	 */
	notify(event, payload) {
		if (!this.subscribers[event]) {
			console.warn('Event not supported', event);
			return;
		}

		this.subscribers[event].forEach(cb => cb(payload));
	}
}