import Backbone from 'backbone'
import Category from '../models/Category'

export default class CategoryList extends Backbone.Collection {
  constructor(options) {
    super(options);
    this.model = Category;
    this.url   = '/categories.json'
  }

}
