const initialState = {
    todos: ['learn redux']
}

const ADD_TODO = 'ADD_TODO';

export function addTodo( newTodo ) {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {todos: [...state.todos, action.payload]})
        default:
            return state;
    }
}