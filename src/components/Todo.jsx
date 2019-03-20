import React from 'react';
import Button from './Button';

function Todo(props) {
  return (
    <div className={props.className}>
      <Button
        className='checkbox icon'
        icon={props.completed ? 'check_box' : 'check_box_outline_blank'}
        onClick={() => {
          props.todoComplete(props.id);
        }}
      />
      <span className='todo-title'>{props.title}</span>
      <Button className='edit icon' icon={'edit'} />
      <Button 
        className='delete icon'
        icon={'delete'}
        onClick={() => {
          props.todoDelete(props.id);
        }}
      />
    </div>
  );
}

export default Todo;