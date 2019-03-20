import React from 'react';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  render() {
    return (
      <form
        className={this.props.className}
        onSubmit={(evt) => {
          evt.preventDefault();
          this.props.submit(this.refs.title.value);
          this.setState({ title: '' });
        }}>
        <input 
          type='text'
          placeholder='What need to do...'
          value={this.props.value ? this.props.value : this.state.title}
          onChange={() => {
            this.setState( {title: this.refs.title.value} )
          }}
          ref='title'>
        </input>
        <Button type='submit' children='add'></Button>
      </form>
    );
  }
}

export default Form;
