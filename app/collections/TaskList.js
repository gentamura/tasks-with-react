import Backbone from 'backbone'
import Task from '../models/Task'

export default class TaskList extends Backbone.Collection {
  constructor(options) {
    super(options);
    this.model = Task;
    this.url   = '/tasks.json'
  }
}
