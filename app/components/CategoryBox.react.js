import React from 'react'
import CategoryForm from './CategoryForm.react'
import CategoryList from './CategoryList.react'

export default class CategoryBox extends React.Component {

  handleCategoriesSubmit(category) {
    this.props.categories.create(category, {
      success: (categories) => {
        this.props.onShowCategories();
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  render() {
    var onShowTasks = this.props.onShowTasks;
    return (
      <aside id="category">
        <CategoryList router={this.props.router} categories={this.props.categories} onShowTasks={onShowTasks} />
        <CategoryForm onCategoriesSubmit={this.handleCategoriesSubmit.bind(this)}/>
      </aside>
    );
  }
}
