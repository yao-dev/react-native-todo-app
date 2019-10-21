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
