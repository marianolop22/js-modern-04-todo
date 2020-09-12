import './styles.css';
import { Todo, TodoList } from "./classes/index.js";
import { crearTodoHtml } from "./js/componentes";


// const tarea = new Todo('Aprender Js');
export const todoList = new TodoList ();

// todoList.nuevoTodo(tarea);
// console.log(todoList);

// crearTodoHtml(tarea);

console.log(todoList);

todoList.todos.forEach( crearTodoHtml ); // esto es lo mismo que esto todo => crearTodoHtml(todo)

