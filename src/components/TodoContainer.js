import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modes, Types } from "../constants";
import {
  completeTodo,
  updateTodo,
  deleteTodo,
  enableTodoEditMode,
  disableTodoEditMode
} from "../actions/todos";
import TodoForm from "./TodoForm";
import "../css/TodoContainer.scss";

class TodoContainer extends Component {
  updateTodo = (title, dueDate, project) => {
    this.props.updateTodo(this.props.todo.id, title.trim(), dueDate, project);
  };

  render() {
    const {
      todo,
      completeTodo,
      deleteTodo,
      enableEditMode,
      disableEditMode
    } = this.props;

    switch (todo.mode) {
      case Modes.EDIT:
        return (
          <TodoForm
            view="UPDATE"
            title={todo.title}
            dueDate={todo.dueDate}
            project={todo.project}
            updateTodo={this.updateTodo}
            disableEditMode={() =>
              disableEditMode({ type: Types.FORM.TODO, id: todo.id })
            }
          />
        );
      default:
        return (
          <div className="todo-read-container">
            <div className="todo-complete-btn-container">
              <div
                onClick={() => completeTodo(todo.id)}
                className="todo-complete-btn"
              />
            </div>

            <div
              onClick={() =>
                enableEditMode({ type: Types.FORM.TODO, id: todo.id })
              }
              className="todo-title"
            >
              {todo.title}
            </div>
            <Link
              to={(todo.project && `/projects/${todo.project}`) || `/inbox`}
              className="todo-assigned-project"
            >
              {(todo.project && todo.project) || "Inbox"}
            </Link>
            <div
              className="todo-delete-container"
              onClick={() => deleteTodo(todo.id)}
            >
              <div className="todo-delete-btn">X</div>
            </div>
          </div>
        );
    }
  }
}

const mapState = () => ({});

const mapActions = dispatch => {
  return {
    completeTodo: id => dispatch(completeTodo(id)),
    updateTodo: (id, title, dueDate, project) =>
      dispatch(updateTodo(id, title, dueDate, project)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    enableEditMode: ({ type, id }) =>
      dispatch(enableTodoEditMode({ type, id })),
    disableEditMode: ({ type, id }) =>
      dispatch(disableTodoEditMode({ type, id }))
  };
};

export default connect(
  mapState,
  mapActions
)(TodoContainer);
