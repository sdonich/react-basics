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

  componentDidMount() {
    axios.get('/api/todos')
      .then(res => res.data)
      .then(data => {
        this.setState({ todos: data })
      })
      .catch(this.handleError)
  }

  handleToggle(id) {
    axios.patch(`/api/todos/${id}`)
      .then(res => res.data)
      .then(data => {
        const todos = this.state.todos.map(todo => {
          if (todo.id === data.id) {
            todo.completed = data.completed;
          }
          return todo;
        });

        this.setState({ todos });
      })
      .catch(this.handleError)
  }

  handleDelete(id) {
    axios.delete(`/api/todos/${id}`)
      .then(res => {
        if (res.status === 204) {
          const todos = this.state.todos.filter(todo => todo.id !== id);
          this.setState({ todos });
        }
      })
      .catch(this.handleError)
  }

  handleEdit(id, title) {
    axios.put(`/api/todos/${id}`, {title})
      .then(res => res.data)
      .then(data => {
        const todos = this.state.todos.map(todo => {
          if (todo.id === data.id) {
            todo.title = data.title;
          }
          return todo;
        })
        this.setState({ todos });
      })
      .catch(this.handleError)
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