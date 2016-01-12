import Backbone from 'backbone'

export default class Router extends Backbone.Router {
  constructor(options) {
    super(options);
    this.routes = {
      '' : 'index',
      'foo' : 'foo',
      'bar' : 'bar',
      'category/:id' :  'show'
    };
    this.current = '';
    this._bindRoutes();
  }

  index() {
    console.log('index');
    this.current = 'index';
  }

  foo() {
    console.log('foo');
    this.current = 'foo';
  }

  bar() {
    console.log('bar');
    this.current = 'bar';
  }

  show(id) {
    this.current = 'show'
    this.id = id;
  }

}
