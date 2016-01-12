import Backbone from 'backbone'

export default class Task extends Backbone.Model {
  defaults() {
    return {
      categoryId: 0,
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
