import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
    name: 'search',
    initialState: { value: '' },
    reducers: {
        searchItem: (state,action) => {
        state.value = action.payload;
      },
    },
  });

  export const {searchItem} = searchSlice.actions;
export default searchSlice.reducer;