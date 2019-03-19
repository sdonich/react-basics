import React from 'react';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let title = this.state.title;
    if (title) {
      this.props.onAdd(title);
      this.setState({ title: ''});
    } 
  }

  handleChange(evt) {
    let title = evt.target.value;
    this.setState({ title });
  }

  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.title}
          placeholder='What need to do...'
          onChange={this.handleChange}
        />
        
        <Button type='submit'>Add</Button>

      </form>
    );
  }
}

export default Form;