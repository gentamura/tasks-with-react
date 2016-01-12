import React from 'react'

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

  handleSubmit(e) {
    e.preventDefault();
    var name = this.refs.name.value.trim();
    if (!name) return;
    this.handleCategoriesSubmit({name: name});
    this.refs.name.value = '';
  }

  render() {
    var taskNodes = this.props.categories.map((category) => {
      return (
        <Category category={category} key={category.get('id')} onShowTasks={this.props.onShowTasks} />
      );
    });

    return (
      <aside id="category">
        <form className="category-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col-md-10">
              <div className="form-group">
                <input type="text" placeholder="Say somthing..." ref="name" className="form-control" />
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" value="Add" className="btn btn-primary btn-block" />
            </div>
          </div>
        </form>
        <ul>
          {taskNodes}
        </ul>
      </aside>
    );
  }
}


class Category extends React.Component {
  render() {
    const name = this.props.category.get('name');
    const id   = this.props.category.get('id');
    const href = "#category/" + id;
    return (
      <li><a href={href} onClick={this.props.onShowTasks.bind(this, id)}>{name}</a></li>
    );
  }
}
