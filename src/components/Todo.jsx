import React from 'react';
import Button from './Button';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }

    this.switchEditing = this.switchEditing.bind(this);
  }

  switchEditing() {
    this.setState( {editing: !this.state.editing} );
  }

  componentDidUpdate() {
    if (this.refs.title) {
      this.refs.title.focus();
      this.refs.title.select();
    }
  }

  displayForm() {
    return (
      <form
        className='todo-edit-form'
        onSubmit={(evt) => {
          evt.preventDefault();
          this.switchEditing();
          this.props.todoEdit(this.props.id, this.refs.title.value);
        }}>
        <input type='text' defaultValue={this.props.title} ref='title'></input>
        <Button
          className='save icon'
          icon='save'
          type='submit'
        />
      </form>
    );
  }

  displayTodo() {
    return (
      <div className={this.props.className}>
        <Button
          className='checkbox icon'
          icon={this.props.completed ? 'check_box' : 'check_box_outline_blank'}
          onClick={() => {
            this.props.todoComplete(this.props.id);
          }}
        />
        <span className='todo-title'>{this.props.title}</span>
        <Button 
          className='edit icon' 
          icon='edit'
          onClick={this.switchEditing}
        />
        <Button 
          className='delete icon'
          icon='delete'
          onClick={() => {
            this.props.todoDelete(this.props.id);
          }}
        />
      </div>
    );
  }

  render() {
    return (this.state.editing ?
      this.displayForm()
      :
      this.displayTodo()
    );
  }
}

export default Todo;