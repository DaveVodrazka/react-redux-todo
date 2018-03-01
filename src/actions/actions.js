let todoId = 0
export function addTodo(text) {
  return{
    type: 'ADD_TODO',
    id: todoId++,
    text
  }
}

export function removeTodo(id, e) {
  e.stopPropagation();
  return{
    type: 'REMOVE_TODO',
    id
  }
}

export function isActive(key, status) {
  if (status === key) {
    return "showBtnActive";
  } else {
    return "showBtn";
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_DONE',
    id
  }
}

export function showClass(done, show) {
    if (done) {
      if (show == "all" || show == "done") {
        return "done";
      } else if (show == "active") {
        return "hide";
      }
      return "done";
    } else {
      if (show == "all" || show == "active") {
        return "undone";
      } else {
        return "hide";
      }
    }
  }
