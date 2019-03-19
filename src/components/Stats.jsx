import React from 'react';


function Stats(props) {
  let total = props.todos.length;
  let completed = props.todos.filter(todo => todo.completed).length;
  let notCompleted = total - completed;

  return (
    <table className='stats'>
      <tbody>
        <tr>
          <th>total tasks:</th>
          <td>{total}</td>
        </tr>
        <tr>
          <th>Completed:</th>
          <td>{completed}</td>
        </tr>
        <tr>
          <th>left:</th>
          <td>{notCompleted}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;