let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
//guess
//wukong
//bajie
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
//aaaaaaaaaaaaa
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
//dddd
