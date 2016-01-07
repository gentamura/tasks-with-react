import Backbone from 'backbone'

export default class Task extends Backbone.Model {
  defaults() {
    this.author = 'default author';
    this.text   = 'default text';
  }
}
