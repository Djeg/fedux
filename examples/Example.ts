// Designing the state
export type Todo = {
    todo: string,
    completed: boolean,
}

export type TodoState = {
    todos: Array<Todo>,
}

export const InitialState: TodoState = {
    todos: [],
}

export const addTodo = action<TodoState, string>(
    (state, todo) => ({
        ...state,
        todos: state.todos.push({ todo, completed: false }),
    })
);

export type TodoActions
    = AddTodo

export const reducer = slice<TodoState, TodoActions>('todos', [
    addTodo,
]);

reducer.name; // 'todos'
reducer(addTodo('test'), { todos: [] }) // { todos: [ { todo: 'test', completed: false } ] }
reducer.actions.addTodo('')

export type RootState = {
    todos: TodoState
}

export const rootReducer = state([ reducer ])