export const completeTask = (id, completed) => ({
  type: 'COMPLETE_TASK',
  payload: {
    id,
    completed
  }
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id
  }
})
