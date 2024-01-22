// const delayedActionMiddelware = (storeAPI) => (next) => (action) => {
//   if (action.type === "todos/todoAdded") {
//     setTimeout(() => {
//       next(action);
//     }, 1000);
//     return;
//   }
//   return next(action);
// };

// const fetchTodosMiddleware = (storeAPI) => (next) => (action) => {
//   if (action.type === "todos/fetchTodos") {
//     client.get("todos").then((todos) => {
//       storeAPI.dispatch({ type: "todos/todosLoaded", payload: todos });
//     });
//   }
//   return next(action);
// };

import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  entities: {},
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      const todo = action.payload;
      state.entities[todo.id] = todo;
    },
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    todocolorSelected: {
      reducer(state, action) {
        const { color, todoId } = action.payload;
        state.entities[todoId].color = color;
      },
      prepare(todoId, color) {
        return {
          payload: { todoId, color },
        };
      },
    },
    todoDeleted(state, action) {
      delete state.entities[action.payload];
    },
    allTodosCompleted(state, action) {
      Object.values(state.entities).forEach((todo) => {
        todo.completed = truie;
      });
    },
    completedTodosCleared(state, action) {
      Object.values(state.entities).forEach((todo) => {
        if (todo.completed) {
          delete state.entities[todo.id];
        }
      });
    },
    todosLoading(state, action) {
      state.status = "loading";
    },
    todosLoaded(state, action) {
      const neweEntities = {};
      action.payload.forEach((todo) => {
        neweEntities[todo.id] = todo;
      });
      state.entities = neweEntities;
      state.status = "idle";
    },
  },
});

export const {
  allTodosCompleted,
  completedTodosCleared,
  todoAdded,
  todocolorSelected,
  todoDeleted,
  todoToggled,
  todosLoaded,
  todosLoading,
} = todoSlice.actions;

export default todoSlice.reducer;

export const fetchTodos = () => async (dispatch) => {
  dispatch(todosLoading());
  const response = await client.get("/fakeApi/todos");
  dispatch(todosLoaded(response.todo));
};

export function saveNewTodo(text) {
  return async function saveNeWTodoThunk(dispatch, getState) {
    const initialTodo = { text };
    const response = await client.post("/fakeApi/todos", { todo: initialTodo });
    dispatch(todoAdded(response.todo));
  };
}

const selectTodoEntities = (state) => state.todos.entities;

export const selectTodos = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
);

export const selectTododById = (state, todoId) => {
  return selectTodoEntities(state)[todoId];
};

export const selectTodoIds = createSelector((todos) =>
  todos.map((todo) => todo.id)
);

export const selectFilteredTodos =  createSelector()