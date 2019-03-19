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
        this.handleToggle = this.handleToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handlerEdit = this.handlerEdit.bind(this);
    }

   componentDidMount() {
       axios.get('api/todos')
        .then(res => res.data)
        .then(todos => this.setState({todos}))
        .catch(this.handleError);
   }

    handlerEdit(id, title) {
        axios.put(`/api/todos/${id}`, { title })
            .then(res => {
                const todos = this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo = res.data
                    }
                    return todo;
                });
                this.setState( {todos} );
            })
            .catch(this.handleError);
    }

    handleToggle(id) {
        axios.patch(`/api/todos/${id}`)
            .then(res => {
                const todos = this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo = res.data;
                    }
        
                    return todo;
                })
        
                this.setState( {todos} );
            })
            .catch(this.handleError);
    }

    handleDelete(id) {
        axios.delete(`/api/todos/${id}`)
            .then(() => {
                let todos = this.state.todos.filter(todo => todo.id !== id);
                this.setState( {todos} );
            })
            .catch(this.handleError);
        
    }

    handleAdd(title) {
        axios.post('api/todos', {title})
            .then(res => res.data)
            .then(todo => {
                const todos = [...this.state.todos, todo];
                this.setState( {todos} );
            })
            .catch(this.handleError);
    }

    handleError(error) {
        console.log(error);
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} todos={this.state.todos} />
                <section className='todo-list'>
                    {
                        this.state.todos.map((todo, i) => {
                            return <Todo 
                                title={todo.title} 
                                key={todo.id}
                                id={todo.id}
                                completed={todo.completed} 
                                onStatusChange={this.handleToggle}
                                onDelete={this.handleDelete}
                                onEdit={this.handlerEdit} 
                            />
                        })
                    }
                </section>
                <Form onAdd={this.handleAdd}/>
            </main>
        );
    }
    
}

export default App;