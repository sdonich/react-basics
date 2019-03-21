import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }

    this.id = 3;

    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleError(error) {
    console.log(error);
  }

  componentWillMount() {
    axios.get('/api/todos')
      .then(res => res.data)
      .then(data => {
        this.setState({ todos: data })
      })
      .catch(this.handleError)
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

  handleAdd(title) {
    axios.post('api/todos', {title})
      .then(res => res.data)
      .then(todo => {
        let todos = [...this.state.todos, todo];
        this.setState({ todos });
      })
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos} />
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

        <Form
          className='todo-form'
          value=''
          submit={this.handleAdd}
        />   
      </main>
    )
  } 
}

export default App;