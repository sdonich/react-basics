import React from 'react';

function Stats(props) {
  let total = props.todos.length;
  let completed = props.todos ? props.todos.filter(todo => todo.completed === true).length : 0;
  let left = total - completed;
  
  return (
    <table className={props.className}>
      <tbody>
        <tr key={1}>
          <th>Total:</th>
          <td>{total}</td>
        </tr>
        <tr key={2}>
          <th>Completed:</th>
          <td>
            {completed}
          </td>
        </tr>
        <tr key={3}>
          <th>Left:</th>
          <td>{left}</td>
        </tr>
      </tbody>
    </table>

  );
}

export default Stats;