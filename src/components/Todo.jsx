import React from 'react';
import Button from './Button';

function Todo(props) {
  return (
    <div className='todo'>
      <Button className='checkbox icon' icon={'check_box_outline_blank'} />
      <span className='todo-title'>{props.title}</span>
      <Button className='edit icon' icon={'edit'} />
      <Button className='delete icon' icon={'delete'} />
    </div>
  );
}

export default Todo;