import { Todo } from ".";

export class TodoList { 

    constructor () {
        this.cargarLocalStorage();
    }

    nuevoTodo (todo) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo ( id ) {
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {

        for (const todo of this.todos) {
            if ( todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }   
        }
        this.guardarLocalStorage();

    }

    eliminarCompletados () {
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage () {
        localStorage.setItem('todoList', JSON.stringify(this.todos));
    }

    cargarLocalStorage () {

        if ( localStorage.getItem('todoList')) {
            this.todos = JSON.parse( localStorage.getItem('todoList') );
            this.todos = this.todos.map( Todo.fromJson ); //lo mismo que obj => Todo.fromJson( obj )


        } else {
            this.todos = new Array();
        }


    }



}