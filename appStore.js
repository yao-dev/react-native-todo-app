import { createStore } from 'redux';

export const initialState = {
  tasks: [{
    id: 1,
    name: 'test',
    categoryId: 1,
  }],
  categories: [{
    id: 1,
    name: 'test'
  }]
}

export const reset = () => initialState;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      // console.log([
      //   ...state.tasks,
      //   action.payload
      // ])
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ]
      }
    case 'DELETE_TASK':
      return state;
    case 'ADD_CATEGORY':
      // console.log([
      //   ...state.categories,
      //   action.payload
      // ])
      return {
        ...state,
        categories: [
          ...state.categories,
          action.payload
        ]
      }
    case 'DELETE_CATEGORY':
      return state;
    case 'RESET':
      return reset();
    case 'COMPLETE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.completed = action.payload.completed;
          }
          return task;
        })
      };
    default:
      return state;
  }
}

export default createStore(reducer, initialState);


