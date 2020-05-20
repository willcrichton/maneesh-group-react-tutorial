import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let todos = [];

$('.todo-add').click(() => {
  todos.push({text: ''});
  todo_render();
});

function todo_render() {
  let all_todo_dom = todos.map((todo, i) => {
    let todo_dom = $(`<div class="todo">
    <input type="text" placeholder="Empty todo" value="${todo.text}"/>
    <button class="todo-delete">Delete</button>
</div>`);

    todo_dom.find('.todo-delete').click(() => {
      todos.splice(i, 1);
      todo_render();
    });

    todo_dom.find('input').change(function() {
      todo.text = $(this).val();
    });

    return todo_dom;
  });

  $('.todo-list').html(all_todo_dom);

  $('.todo-count').html($('.todo').length);
}
