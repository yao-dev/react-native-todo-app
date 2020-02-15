import { createStore } from 'redux';

export const initialState = {
  tasks: [],
  categories: []
}

export const reset = () => initialState;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ]
      }
    case 'UPDATE_TASK':
        console.log(action.payload)
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              name: action.payload.name,
              categoryId: action.payload.categoryId,
            }
          }
          return task;
        })
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          if (task.id !== action.payload.id) {
            return task;
          }
        })
      };
    case 'ADD_CATEGORY':
      // console.log([
      //   ...state.categories,
      //   action.payload
      // ])
      console.log(action.payload)
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


