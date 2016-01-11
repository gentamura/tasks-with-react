import Backbone from 'backbone'

export default class Category extends Backbone.Model {
  defaults() {
    return {
      name: 'default category'
    };
  }
}
