import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: props.todos
    }

    this.id = 3;

    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  nextId() {
    return ++this.id;
  }

  handleToggle(id) {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos });
  }

  handleDelete(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos });
  }

  handleEdit(id, title) {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    })
    this.setState({ todos });
  }

  handleAdd() {
    let todo = {
      id: this.nextId(),
      title: this.refs.title.value,
      completed: false
    };

    let todos = [...this.state.todos, todo];

    this.setState({todos});
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} />
        <section className='todo-list'>
          {
            this.state.todos.map(todo => {
              return <Todo
                key={todo.id}
                className={todo.completed ? 'todo completed' : 'todo'}
                todoComplete={this.handleToggle}
                todoDelete={this.handleDelete}
                todoEdit={this.handleEdit}
                todoAdd={this.handleAdd}
                {...todo}
              />
            })
          }
        </section>
        <form
          className='todo-form'
          onSubmit={(evt) => {
            evt.preventDefault();
            this.handleAdd();
          }}
        >
          <input type='text' placeholder='What need to do...' ref='title'></input>
          <Button type='submit' children='add'></Button>
        </form>
      </main>
    )
  } 
}

export default App;