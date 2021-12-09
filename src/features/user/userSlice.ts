import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IUser } from "../../interface/user";

interface IUserState {
  data: IUser;
}

const initialState: IUserState = {
  data: {
    id: 1,
    email: "John@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: {
      firstname: "John",
      lastname: "Doe",
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
    phone: "1-570-236-7033",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload;
    },
  },
});

export const { setUserAction } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.data;
export default userSlice.reducer;
