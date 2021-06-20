const initialState = {
    items: [
        {
          id: "111",
          name: "Сделать задание",
          isDone: true
        },
        {
          id: "222",
          name: "Сделать домашнюю работу",
          isDone: true
        }
      ],
}

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_DONE_TODO = 'TOGGLE_DONE_TODO'; 

export const addTodo = (name) => ({
    type: ADD_TODO,
    payload: name,
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id,
})

export const toggleDoneTodo = (id) => ({
    type: TOGGLE_DONE_TODO,
    payload: id,
})

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: {
            const newTodo = {
                id: 'list-' + Math.floor(Math.random() * 100000),
                name: action.payload,
                isDone: false,
            }
            return {
                ...state,
                items: [newTodo].concat(state.items),
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                items: state.items.filter((item) => item.id !==action.payload),
            }
        }
        case TOGGLE_DONE_TODO: {
            return {
                ...state,
                items: state.items.map((item) => {
                    if(item.id === action.payload) {
                        return {
                            ...item,
                            isDone: !item.isDone,
                        }
                    }
                    return item;
                })
            }
        }
        default: {
            return state
        }
    }
}

export default todosReducer;