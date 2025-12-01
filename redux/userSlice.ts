"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Admin",
  email: "",
  image: "/profile-img.png",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      const { name, email, image } = action.payload;
      if (name) state.name = name;
      if (email) state.email = email;
      if (image) state.image = image;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
