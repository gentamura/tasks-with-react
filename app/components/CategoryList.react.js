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
    return this.isActive(category) ? 'list-group-item active' : 'list-group-item';
  }
  getEditClassName(category) {
    return this.isActive(category) ? 'fui-new hvr-icon-push category-edit' : 'fui-new hvr-icon-push category-edit hide';
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
      <ul className="list-group">
        {categoryNodes}
      </ul>
    );
  }
}
