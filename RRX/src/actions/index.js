let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
// actions
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}//aaaaaa

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
