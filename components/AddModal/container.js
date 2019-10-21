import { connect } from 'react-redux';
import { createCategory, createTask } from '../../common/actions';

const mapStateToProps = (state, ownProps) => {
  const isTaskType = ownProps.type === 'task';
  let defaultCategoryIndex = 0;

  state.categories.find((category, index) => {
    if (category.id === ownProps.categoryId) {
      defaultCategoryIndex = index
      return category
    }
  })

  return {
    categories: state.categories,
    isTaskType,
    defaultCategoryIndex
  }
}

export default container = (Component) => connect(
  mapStateToProps,
  (dispatch, ownProps) => {
    let actionType;
    let addType;

    if (ownProps.type === 'task') {
      actionType = 'ADD_TASK';
      addType = createTask;
    } else {
      actionType = 'ADD_CATEGORY';
      addType = createCategory
    }

    return ({
      addType: (data) => dispatch(addType({
        type: actionType,
        payload: {
          id: Math.random().toString(36).substr(2),
          ...data
        }
      }))
    })
  }
)(Component)
