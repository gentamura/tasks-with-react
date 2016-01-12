import Backbone from 'backbone'
import Task from '../models/Task'

export default class TaskList extends Backbone.Collection {
  constructor(options) {
    super(options);
    this.model = Task;
    this.url   = '/tasks.json'
  }

  filtered(obj) {
    return new this.constructor(this.filter(obj));
  }

  completed() {
    return this.filter(task => task.get('completed'));
  }

  remaining() {
    // via https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator
    return this.without(...this.completed());
  }

  nextOrder() {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  }

  comparator(task) {
    return task.get('order');
  }
}
