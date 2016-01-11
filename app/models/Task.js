import Backbone from 'backbone'

export default class Task extends Backbone.Model {
  defaults() {
    // this.author = 'default author';
    // this.text   = 'default text';
    return {
      author: 'default author',
      text: 'default text',
      title: 'deafult title',
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
