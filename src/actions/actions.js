let todoId = JSON.parse(localStorage.getItem("todoStorage")).length || 0

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
      if (show === "all" || show === "done") {
        return "done";
      } else if (show === "active") {
        return "hide";
      }
      return "done";
    } else {
      if (show === "all" || show === "active") {
        return "undone";
      } else {
        return "hide";
      }
    }
  }

  export function changeSorting(newSort) {
    switch (newSort) {
      case "ascend":
        return{
          type: 'ORDER_ACEND'
        }
      case "descend":
        return{
          type: 'ORDER_DESCEND'
        }
      case "alpha":
        return{
          type: 'ORDER_ALPHA'
        }
      default:
        return{
          type: 'ORDER_ACEND'
        }
    }
  }

  export function setSorting(newSort) {
    switch (newSort) {
      case "ascend":
        return{
          type: 'SET_ACEND'
        }
      case "descend":
        return{
          type: 'SET_DESCEND'
        }
      case "alpha":
        return{
          type: 'SET_ALPHA'
        }
      default:
        return{
          type: 'SET_ACEND'
        }
    }
  }

  export function reIndex() {
    return{
      type: 'RE_INDEX'
    }
  }

  export function checkInput(input) {
    if(input && (input.indexOf("fuck")===-1)) {
      return true
    } else {
      return false
    }
  }

export function loadState() {
  if (localStorage.getItem("todoStorage") === null) {
    return []
  } else {
    try {
      const loadedState = JSON.parse(localStorage.getItem("todoStorage"))
      return loadedState
    } catch(e) {
      console.log("Failed to restore previous state")
      return []
    }
  }
}
