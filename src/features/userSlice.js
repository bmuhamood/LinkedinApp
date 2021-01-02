import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = value.payload;
    },

    logout: (state, action) => {
      state.value = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = state => state.user.user;

export default userSlice.reducer;
