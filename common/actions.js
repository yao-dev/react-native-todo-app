export const createTask = ({ type, payload }) => ({
  type,
  payload: {
    id: payload.id,
    name: payload.name,
    categoryId: payload.categoryId,
    completed: payload.completed,
  }
})

export const createCategory = ({ type, payload }) => ({
  type,
  payload: {
    id: payload.id,
    name: payload.name,
  }
})

export const completeTask = (id, completed) => ({
  type: 'COMPLETE_TASK',
  payload: {
    id,
    completed
  }
});

export const updateTask = ({ id, name, categoryId }) => ({
  type: 'UPDATE_TASK',
  payload: {
    id,
    name,
    categoryId
  }
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id
  }
})
