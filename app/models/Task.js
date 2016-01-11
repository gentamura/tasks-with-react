import Backbone from 'backbone'

export default class Task extends Backbone.Model {
  defaults() {
    return {
      category: 'default category',
      content: 'deafult content',
      completed: false
    };
  }

  toggle() {
    this.save({
      completed: !this.get('completed')
    });
  }

  delete() {
    this.destroy();
  }
}
