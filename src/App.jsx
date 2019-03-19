import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: props.todos
    }
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} />
        <section className='todo-list'>
          {
            this.state.todos.map(todo => {
              return <Todo key={todo.id} {...todo} />
            })
          }
        </section>
      </main>
    )
  } 
}

export default App;