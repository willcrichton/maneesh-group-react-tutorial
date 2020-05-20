import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

$('.todo-add').click(() => {
  $('.todo-list').append(`<div class="todo">
    <input type="text" placeholder="Empty todo" />
</div>`);
});
