import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

$('.todo-add').click(() => {
  let todo = $(`<div class="todo">
    <input type="text" placeholder="Empty todo" />
    <button class="todo-delete">Delete</button>
</div>`);
  todo.find('.todo-delete').click(() => {
    todo.remove();
  });
  $('.todo-list').append(todo);
  $('.todo-count').html($('.todo').length);
});
