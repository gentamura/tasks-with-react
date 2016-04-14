import Backbone from 'backbone'

export default class Router extends Backbone.Router {
  constructor(options) {
    super(options);
    this.routes = {
      'category/:id' : 'show',
      'category/new' : 'new'
    };
    this.current = {
      id: ''
    };
    this._bindRoutes();
  }

  show(id) {
    this.current.id = id;
  }

  new() {
    var href = window.location.href;
    console.log('category/new', href);
  }
}
