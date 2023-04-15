import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FormState = {
  submissions: string[];
  searchText: string;
};

const initialState: FormState = {
  submissions: [],
  searchText: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addSubmission: (state, action: PayloadAction<string>) => {
      state.submissions.push(action.payload);
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { addSubmission, setSearchText } = formSlice.actions;

export default formSlice.reducer;
