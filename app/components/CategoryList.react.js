import React from 'react'
import Category from './Category.react'

export default class CategoryList extends React.Component {
  constructor(options) {
    super(options);
    this.state = {
      linkClassName: '',
      editClassName: '',
      taskNum: ''
    }
  }

  isActive(category) {
    return this.props.router.current.id === category.get('id').toString();
  }
  getLinkClassName(category) {
    return this.isActive(category) ? 'category-list active' : 'category-list';
  }
  getEditClassName(category) {
    return this.isActive(category) ? 'fui-new category-edit' : 'fui-new category-edit hide';
  }

  render() {
    var categoryNodes = this.props.categories.map((category) => {
      return (
        <Category
          linkClassName={this.getLinkClassName(category)}
          editClassName={this.getEditClassName(category)}
          category={category}
          key={category.get('id')}
          onShowTasks={this.props.onShowTasks}
        />
      );
    });
    return (
      <ul className="nav nav-list">
        <li className="nav-header">Category</li>
        {categoryNodes}
      </ul>
    );
  }
}
