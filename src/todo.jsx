import React from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

let todos = observable([]);

let TodoInput = observer((props) => {
  return <input type="text" placeholder="Empty todo"
                defaultValue={props.todo.text} />
});

let Todo = observer((props) => {
  return <div className="todo">
    <TodoInput todo={props.todo} />
  </div>
});


let TodoList = observer((props) => {
  function add_todo() {
    todos.push({text: ''});
  }

  return <div>
    <button className="todo-add" onClick={add_todo}>Add</button>
    <span className="todo-count">{todos.length}</span>
    <div className="todo-list">
      {todos.map((todo, i) => <Todo todo={todo} i={i} />)}
    </div>
  </div>;
});

ReactDOM.render(<TodoList />, document.getElementById('todo-container'));
