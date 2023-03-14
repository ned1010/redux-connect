import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: { numOfBooks: 10 },
  reducers: {
    buyBook: (state) => {
      //decrease the number of books to
      if (state.numOfBooks === 1) {
        setTimeout(() => {
          alert("No book available");
        }, 10);

        state.numOfBooks = 10;
      } else {
        state.numOfBooks--;
      }
    },
  },
});

export const { buyBook } = bookSlice.actions;
export default bookSlice;
