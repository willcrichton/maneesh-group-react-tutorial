import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let todos = [];

$('.todo-add').click(() => {
  todos.push({text: ''});
  todo_render();
});

function todo_delete(i) {
  let delete_dom = $('<button class="todo-delete">Delete</button>');
  delete_dom.click(() => {
    todos.splice(i, 1);
    todo_render();
  });
  return delete_dom;
}

function todo_input(todo) {
  let input_dom = $(
    `<input type="text" placeholder="Empty todo" value="${todo.text}"/>`);
  input_dom.change(function() {
    todo.text = $(this).val();
  });
  return input_dom;
}

function todo_render() {
  let all_todo_dom = todos.map((todo, i) => {
    let todo_dom = $(`<div class="todo"></div>`);

    todo_dom.append(todo_input(todo));
    todo_dom.append(todo_delete(i));

    return todo_dom;
  });

  $('.todo-list').html(all_todo_dom);
  $('.todo-count').html(todos.length);
}
