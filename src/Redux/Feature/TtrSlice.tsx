import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

export const TtrSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item?.id !== action.payload);
    },
    toggleIsComplate: (state, action) => {
      const toggle = state.todos.find((item) => item?.id == action.payload);
      toggle!.isCompleted = !toggle?.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleIsComplate } = TtrSlice.actions;

export default TtrSlice.reducer;
