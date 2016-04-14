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
      <div id="category" className="col-md-3">
        <CategoryList router={this.props.router} categories={this.props.categories} onShowTasks={onShowTasks} />
        <CategoryForm router={this.props.router} onCategoriesSubmit={this.handleCategoriesSubmit.bind(this)}/>
      </div>
    );
  }
}
