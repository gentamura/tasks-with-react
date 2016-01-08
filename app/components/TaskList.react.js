import React from 'react'
import Task from './Task.react'

export default class TaskList extends React.Component {
  render() {
    var taskNodes = this.props.tasks.map((task) => {
      return (
        // <Task author={task.get('author')} key={task.get('id')}>{task.get('text')}</Task>
        <Task key={task.get('id')} task={task} onToggleClick={this.props.onToggleClick}/>
      );
    });
    return (
      <ul className="task-list list-group" id="jquery-ui-sortable">
        {taskNodes}
      </ul>
    );
  }
}