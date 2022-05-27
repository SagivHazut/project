import { createSlice } from "@reduxjs/toolkit";

/*
    create variables that we want redux to store for us
*/
const initialAuthState = {
  loggedIn: false,
  token: "",
  userData: {},
};

/*
    this is a redux toolkit pattern to
    create the state for redux its self
    create actions/reducers to manipulate the state
*/
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
    updateToken(state, action) {
      state.token = action.payload;
    },
    updateUser(state, action) {
      state.userData = action.payload;
    },
    biz(state) {
      state.bizNumber = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
