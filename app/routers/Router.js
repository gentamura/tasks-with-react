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
    this.current = {
      param: '',
      id: '',
    };
    this._bindRoutes();
  }

  index() {
    console.log('index');
    this.current.param = 'index';
  }

  foo() {
    console.log('foo');
    this.current.param = 'foo';
  }

  bar() {
    console.log('bar');
    this.current.param = 'bar';
  }

  show(id) {
    this.current.param = 'show'
    this.current.id = id;
  }

}
