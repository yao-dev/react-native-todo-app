import { connect } from 'react-redux';
import { completeTask, deleteTask, updateTask } from '../../common/actions';

export default container = (Component) => connect(
  (state, ownProps) => {
    return {
      ...state,
      taskCategory: state.categories.find(category => category.id === ownProps.categoryId)
    }
  },
  (dispatch, ownProps) => {
    return {
      completeTask: (completed) => dispatch(completeTask(ownProps.id, completed)),
      deleteTask: () => dispatch(deleteTask(ownProps.id)),
      updateTask: (data) => dispatch(updateTask({
        ...data,
        id: ownProps.id,
      })),
    }
  }
)(Component)
