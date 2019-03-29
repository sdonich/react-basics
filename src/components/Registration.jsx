import React from 'react';
// import axios from 'axios';

class Registration extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // console.log('hell');
  render() {
    return (
      <form onSubmit={
        (evt) => {
          evt.preventDefault();
          this.props.register(this.refs.username.value);
        }
      }>
        <input type='text' ref='username'></input>
        <button type='submit'>ok</button>
      </form>
    );
  }
}






export default Registration;