import './styles.css';
import { Todo, TodoList } from "./classes/index.js";
import { crearTodoHtml } from "./js/componentes";


// const tarea = new Todo('Aprender Js');
export const todoList = new TodoList ();

// todoList.nuevoTodo(tarea);
// console.log(todoList);

// crearTodoHtml(tarea);

todoList.cargarLocalStorage();
console.log(todoList);



